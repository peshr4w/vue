import { defineStore } from 'pinia';
import { initializeApp } from 'firebase/app';
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, onSnapshot, orderBy, query } from 'firebase/firestore'
export const useBooksStore = defineStore('booksStore', {
    state: () => ({
        books: [],
        book: [],
        loading: false,
        firebaseConfig: {
            apiKey: "AIzaSyDFBqzzg8rSz4XjTCURBN8RX7-EjRE71_8",
            authDomain: "firbasevue-717a3.firebaseapp.com",
            projectId: "firbasevue-717a3",
            storageBucket: "firbasevue-717a3.appspot.com",
            messagingSenderId: "378403902494",
            appId: "1:378403902494:web:447bacc6e9c31a05ceca0f",
            measurementId: "G-0M9EP0LBK0"
        }
    }),
    actions: {
        fetchBooks() {
            initializeApp(this.firebaseConfig);
            const db = getFirestore();
            const colRef = collection(db, 'books');

            const q = query(colRef, orderBy('createdAt'))

            onSnapshot(q, (snapshot) => {
                this.books = []
                snapshot.docs.forEach((doc) => {
                    this.books.push({...doc.data(), id: doc.id })
                })
            })
        },
        addBook(book) {
            const db = getFirestore();
            const colRef = collection(db, 'books');
            addDoc(colRef, book)
        },
        deleteBook(id) {
            const db = getFirestore();
            const docRef = doc(db, 'books', id);
            deleteDoc(docRef)
        },
        fetchSingleBook(id) {
            const db = getFirestore();
            const docRef = doc(db, 'books', id)
            onSnapshot(docRef, (doc) => {
                this.book = []
                this.book = {...doc.data(), id: doc.id }
            })
        }

    }
})