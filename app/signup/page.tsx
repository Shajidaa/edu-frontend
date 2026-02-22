import MyContainer from "../components/share/MyContainer";



export default function LoginPage() {


  return (
    <MyContainer className="flex gap-10 p-20">
      <div>
        <h2>Student</h2>
        <button  className="bg-amber-500 text-white px-4 py-2 rounded">
          Login Button
        </button>
      </div>
      <div>
        <h2>Tutor</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Login Button
        </button>
      </div>
    </MyContainer>
  );
}