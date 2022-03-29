module.exports={
    resolve:{
        fallback:{ path: require.resolve("path-browserify")},
       fallback: { os: require.resolve("os-browserify/browser") },
     
    },
   
};