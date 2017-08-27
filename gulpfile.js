var gulp = require("gulp"),
    connect = require("gulp-connect");

gulp.task("server", function() {
    connect.server({
        port: 8081
    });
});

gulp.task("default", ["server"]);