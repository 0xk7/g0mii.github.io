// index.js
export default () => {
    const index = [
      {
        src: "./index.md", // [Mandatory] Article path
        date: "22.1.1", // Article creation date
        title: "Sample", // Article Title
        text: "text text text", // Article Summary Description
        img: "https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png", // Image to set in the article
        topics: ["vuetify", "markdown"], // Article Topics
        author: {
          name: "k", // Author's name
          avatar: "https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png", // Author's Avatar
          message:
            "vuetify sample. https://store.vuetifyjs.com/products/parallax-theme-free", // Introduction of the author, message from the author
        },
      },
      {
        src:"./test2.md", // It works even if only 'src' is entered.
        date: "22.1.1", // Article creation date
        title: "Sample", // Article Title
        text: "text text text", // Article Summary Description
        img: "./", // Image to set in the article
        topics: ["vuetify", "markdown"], // Article Topics
        author: {
          name: "k", // Author's name
          avatar: "https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png", // Author's Avatar
          message:
            "vuetify sample. https://store.vuetifyjs.com/products/parallax-theme-free", // Introduction of the author, message from the author
        },
      },
      
    ];
    return index;
  };