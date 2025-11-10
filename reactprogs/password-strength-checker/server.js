const express =require("express");
const app=express();
app.use(express.json());

let courses = [
  { id: 1, name: "Web Development", instructor: "John Doe" },
  { id: 2, name: "Data Structures", instructor: "Jane Smith" },
  { id: 3, name: "Machine Learning", instructor: "Alice Johnson" },
];

app.get("/api/courses",(req,res) => {
    res.json(courses);
})

app.post("/api/courses"),(req,res)=>{
    const{name,instructor}=req.body;
    if(!name || !instructor){
        return res.status(400).json({error:"Name and Instructor are required"});
    }
    const newcourses={
        id:courses.length+1,
        name,
        instructor,
    };
    courses.push(newcourses);
    return res.status(201).json(newcourses);

}

app.delete("/api/courses/:id"),(req,res)=>{
    const courseId=parseInt(req.params.id);
    const courseIndex=courses.findIndex((course)=>course.id===courseId);    

    if (courseIndex===-1){
        return res.status(404).json({error:"Course not found"});
    }
    const deletedCourse=courses.splice(courseIndex,1);
    return res.json(deletedCourse);
}

const PORT=5000;
app.listen(PORT ,() =>{
    console.log(`Server is running on port ${PORT}`);
});