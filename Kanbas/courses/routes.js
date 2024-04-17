import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  app.get("/api/courses/:id", async (req, res) => {
   const course = await dao.findCourseById(req.params.id);
   res.json(course);
  });


  app.put("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const status = await dao.updateCourse(id, req.body);
    const currentCourse = await dao.findCourseById(id);
    res.json(status);
  });

  app.delete("/api/courses/:id", async (req, res) => {
    const status = await dao.deleteCourse(req.params.id);
    res.json(status);
  });

  app.post("/api/courses", async (req, res) => {
    // const course = { ...req.body,
    //   _id: new Date().getTime().toString() };
    // Database.courses.push(course);
    // res.send(course);
    const course = await dao.createCourse(req.body);
    res.json(course);
  });

  app.get("/api/courses", async (req, res) => {
    const course = await dao.findAllCourses(req.body);
    res.json(course); 
  });
}
