import * as dao from "./dao.js";
import * as coursesDao from "../courses/dao.js";
function ModuleRoutes(app) {

    app.put("/api/modules/:mid", async (req, res) => {
      const { mid } = req.params;
      const status = await dao.updateModule(mid, req.body);
      res.json(status);
      });    

    app.delete("/api/modules/:mid", async (req, res) => {
      const status = await dao.deleteModule(req.params.mid);
      res.json(status);
      });
    
    app.post("/api/courses/:cid/modules", async (req, res) => {
      const { cid } = req.params;
      const course = await coursesDao.findCourseById(cid);
      const newModule = {...req.body, course: course.id};
      const module = await dao.createModule(newModule);
      res.json(module);
      });
    
  app.get("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    if (cid) {
      const course = await coursesDao.findCourseById(cid);
      const modules = await dao.findModuleByCourseId(course.id);
      res.json(modules);
    } 
    });
}
export default ModuleRoutes;