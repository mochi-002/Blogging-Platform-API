import 'dotenv/config';
import mongoose from 'mongoose';
import { Post } from '../models/post.model.js';
const posts = [
    // Technology
    {
        title: 'The Future of Artificial Intelligence',
        content: 'Artificial intelligence is changing the way we build and interact with technology.',
        category: 'Technology',
        tags: ['AI', 'Technology', 'Future'],
    },
    {
        title: 'How Technology Is Changing Education',
        content: 'Modern technology has transformed classrooms, online learning, and access to education.',
        category: 'Technology',
        tags: ['Education', 'Technology'],
    },
    {
        title: 'The Evolution of Smartphones',
        content: 'Smartphones have evolved from simple communication devices into powerful computers.',
        category: 'Technology',
        tags: ['Smartphones', 'Tech', 'Mobile'],
    },
    // Programming
    {
        title: 'Learning Node.js',
        content: 'Node.js is a JavaScript runtime built on Chrome’s V8 engine.',
        category: 'Programming',
        tags: ['Node.js', 'JavaScript', 'Backend'],
    },
    {
        title: 'Understanding JavaScript Promises',
        content: 'Promises make it easier to work with asynchronous operations in JavaScript.',
        category: 'Programming',
        tags: ['JavaScript', 'Promises', 'Async'],
    },
    {
        title: 'Getting Started with TypeScript',
        content: 'TypeScript adds static typing and other useful features to JavaScript.',
        category: 'Programming',
        tags: ['TypeScript', 'JavaScript'],
    },
    {
        title: 'Clean Code Principles',
        content: 'Writing clean and maintainable code makes software easier to understand and modify.',
        category: 'Programming',
        tags: ['Clean Code', 'Programming', 'Software'],
    },
    // Database
    {
        title: 'Getting Started with MongoDB',
        content: 'MongoDB is a NoSQL database that stores data in flexible documents.',
        category: 'Database',
        tags: ['MongoDB', 'Database', 'NoSQL'],
    },
    {
        title: 'MongoDB Indexes Explained',
        content: 'Indexes can significantly improve the performance of queries in MongoDB.',
        category: 'Database',
        tags: ['MongoDB', 'Indexes', 'Performance'],
    },
    {
        title: 'SQL vs NoSQL Databases',
        content: 'SQL and NoSQL databases have different strengths and are useful for different types of applications.',
        category: 'Database',
        tags: ['SQL', 'NoSQL', 'Database'],
    },
    {
        title: 'Database Design Basics',
        content: 'Good database design helps applications remain reliable and scalable.',
        category: 'Database',
        tags: ['Database', 'Design', 'Architecture'],
    },
    // Backend
    {
        title: 'Understanding Express.js',
        content: 'Express.js is a minimal and flexible Node.js web application framework.',
        category: 'Backend',
        tags: ['Express', 'Node.js', 'Backend'],
    },
    {
        title: 'Building REST APIs with Express',
        content: 'Express makes it simple to create RESTful APIs using JavaScript and Node.js.',
        category: 'Backend',
        tags: ['Express', 'REST', 'API'],
    },
    {
        title: 'Error Handling in Express',
        content: 'Proper error handling is essential for building reliable Express applications.',
        category: 'Backend',
        tags: ['Express', 'Errors', 'Node.js'],
    },
    {
        title: 'Authentication in Node.js',
        content: 'Authentication allows applications to securely identify and authorize users.',
        category: 'Backend',
        tags: ['Authentication', 'Node.js', 'Security'],
    },
];
const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(process.env.MONGO_URI);
        console.log('MongoDB connected');
        await Post.deleteMany();
        await Post.insertMany(posts);
        console.log('Posts seeded successfully');
        process.exit(0);
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};
seedDatabase();
//# sourceMappingURL=posts.seeder.js.map