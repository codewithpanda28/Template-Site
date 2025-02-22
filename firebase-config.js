// Firebase configuration
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Fetch blogs from Firestore
async function fetchBlogs() {
    try {
        const blogsRef = db.collection('blogs');
        const snapshot = await blogsRef.orderBy('date', 'desc').get();
        const blogs = [];
        
        snapshot.forEach(doc => {
            blogs.push({
                id: doc.id,
                ...doc.data()
            });
        });
        
        return blogs;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return [];
    }
} 