module.exports = {
    content: ["./app/helpers/**/*.rb",
                "./app/javascript/**/*.js",
                "./app/views/**/*.erb"],
    theme: {
       extends:{}
    },
    plugins:[
        "@tailwindcss/forms",
        "@tailwindcss/typography"
    ]
};
