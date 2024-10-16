import { PrismaClient, ROLE, STATUS } from "@prisma/client";
import { faker } from "@faker-js/faker"; // Install Faker for random data generation
const prisma = new PrismaClient();

// Helper function to get random number between min and max
const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Helper function to get random items from an array
const getRandomItems = <T>(array: T[], numItems: number) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numItems);
};

async function main() {
  // Create 10 Donors
  const donors = await Promise.all(
    Array.from({ length: 10 }).map((_, index) =>
      prisma.user.create({
        data: {
          email: `donor${index + 1}@example.com`,
          phoneNum: `123456789${index + 1}`,
          name: `Donor ${index + 1}`,
          photo: `donor${index + 1}-photo-url`,
          role: ROLE.DONOR,
          emailVerified: faker.date.past(), // Random past date
          latitude: faker.location.latitude(),
          longitude: faker.location.longitude(),
          donor: {
            create: {}, // No need to specify id, Prisma handles it
          },
        },
        include: {
          donor: true,
        },
      })
    )
  );

  // Create 10 Acceptors
  const acceptors = await Promise.all(
    Array.from({ length: 10 }).map((_, index) =>
      prisma.user.create({
        data: {
          email: `acceptor${index + 1}@example.com`,
          phoneNum: `987654321${index + 1}`,
          name: `Acceptor ${index + 1}`,
          photo: `acceptor${index + 1}-photo-url`,
          role: ROLE.ACCEPTOR,
          emailVerified: faker.date.past(), // Random past date
          latitude: faker.location.latitude(),
          longitude: faker.location.longitude(),
          acceptor: {
            create: {},
          },
        },
        include: {
          acceptor: true,
        },
      })
    )
  );

  // Add random followers and following to each donor
  for (const donor of donors) {
    const numberOfFollowers = getRandomInt(0, 5); // Random number of followers (up to 5)
    const numberOfFollowing = getRandomInt(0, 5); // Random number of following (up to 5)

    const followers = getRandomItems(donors, numberOfFollowers); // Select random donors as followers
    const following = getRandomItems(donors, numberOfFollowing); // Select random donors as following

    await prisma.donor.update({
      where: { id: donor.id },
      data: {
        followers: {
          connect: followers.map((follower) => ({ id: follower.id })),
        },
        following: {
          connect: following.map((followed) => ({ id: followed.id })),
        },
      },
    });
  }

  // Create 30 Tweets from Donors
  const tweets = await Promise.all(
    Array.from({ length: 30 }).map((_, index) =>
      prisma.tweet.create({
        data: {
          donorId: donors[index % 10].id,
          text: `This is tweet number ${index + 1} from donor ${
            (index % 10) + 1
          }`,
          createdAt: new Date(), // TODO: Random Date
        },
      })
    )
  );

  // Create 30 Likes for Tweets
  await Promise.all(
    Array.from({ length: 30 }).map((_, index) =>
      prisma.like.create({
        data: {
          donorId: donors[index % 10].id,
          tweetId: tweets[index].id,
        },
      })
    )
  );

  // Create 10 Proposals from Acceptors
  const proposals = await Promise.all(
    Array.from({ length: 10 }).map((_, index) =>
      prisma.proposal.create({
        data: {
          authorId: acceptors[index].id,
          reason: `Need funding for project ${index + 1}`,
          amount: BigInt(1000 * (index + 1)),
          status: STATUS.CREATED,
          acceptedDonorId: donors[index % 10].id,
        },
      })
    )
  );

  // Randomly assign accepted proposals to donors
  for (const donor of donors) {
    const acceptedProposals = getRandomItems(proposals, getRandomInt(0, 3)); // Random number of proposals (up to 3)

    await prisma.donor.update({
      where: { id: donor.id },
      data: {
        acceptedProposals: {
          connect: acceptedProposals.map((proposal) => ({
            authorId: proposal.authorId,
          })),
        },
      },
    });
  }

  console.log("Database has been seeded with random data!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
