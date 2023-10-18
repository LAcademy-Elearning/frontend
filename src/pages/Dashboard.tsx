import HightlightedCourses from "../components/HightlightedCourses"
import Reviews from "../components/Reviews"

const Dashboard = () => {
  return (
    <div>
      <div className="p-5">
        <HightlightedCourses/>
      </div>
      

      {/* review section */}
      <div>
        <Reviews/>
      </div>
    </div>
  )
}

export default Dashboard