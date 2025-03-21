import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        hello_world: "hello-world.html",
        contact: "contact.html",
        task: "task.html",
        counter: "counter2.html",
        note: "note.html",
        timer: "timer.html",
	guestBook: "guest_book.html",
      },
    },
  },
});
