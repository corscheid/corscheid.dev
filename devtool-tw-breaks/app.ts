import { defineToolbarApp } from "astro/toolbar";

export default defineToolbarApp({
  init(canvas, app, server) {
    app.dispatchEvent(
      new CustomEvent('toggle-notification', {
        detail: {
          state: false,
        },
      })
    );
  },
});
