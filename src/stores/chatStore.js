import { defineStore } from 'pinia';
import { initializeApp } from 'firebase/app';
import { getFirestore, onSnapshot, collection, addDoc, query, orderBy } from 'firebase/firestore'

export const useChatsStore = defineStore('chatsStore', {
    state: () => ({
        chats: [],
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
        fetchChats() {
            initializeApp(this.firebaseConfig);
            const db = getFirestore();

            const colRef = collection(db, 'chats');
            const q = query(colRef, orderBy('createdAt'))
            onSnapshot(q, (snapshot) => {
                this.chats = []
                snapshot.docs.forEach((doc) => {

                    this.chats.push({...doc.data(), id: doc.id })
                })
            })
        },
        addChat(chat) {
            const db = getFirestore();
            const colRef = collection(db, 'chats');
            addDoc(colRef, chat)
                .then(() => {
                    console.log("Chat sent")
                })
                .catch(err => {
                    cosole.log(err.message)
                })
        }
    }
})