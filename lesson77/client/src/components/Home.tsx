import useProfile from "../hooks/useProfile";

export default function Home() {
  const { data } = useProfile();
  const user = {
    name: "a",
    roles: ["admin", "user", "moderator", "developer", "audit"],
  };

  const adminRole =
    user.roles.filter((role) => {
      if (role === "admin") {
        return "admin";
      }
    }) || null;
  const userRole =
    user.roles.filter((role) => {
      if (role === "user") {
        return "user";
      }
    }) || null;
  const moderatorRole =
    user.roles.filter((role) => {
      if (role === "moderator") {
        return "moderator";
      }
    }) || null;
  const auditRole =
    user.roles.filter((role) => {
      if (role === "audit") {
        return "audit";
      }
    }) || null;
  const developerRole =
    user.roles.filter((role) => {
      if (role === "developer") {
        return "developer";
      }
    }) || null;

  console.log(adminRole, userRole, moderatorRole, developerRole, auditRole);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-gray-400 fixed top-0 flex left-0 right-0 justify-between items-center">
        <h1 className="text-3xl font-bold m-2">Home</h1>
        <form>
          <button
            type="submit"
            onClick={async () => {
              await fetch("http://localhost:8000/logout", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
                credentials: "include",
              });
            }}
            className=" text-blue-700 font-semibold m-3 rounded-md hover:underline transition-all duration-300 cursor-pointer"
          >
            log out
          </button>
        </form>
      </div>
      <div className="text-center">
        <p className="text-gray-600">
          Welcome to your profile page {data?.user.name}
        </p>
        <div className="flex flex-col">
          {adminRole[0] && (
            <>
              <a href="#admin">admin</a>
              <a href="#user">user</a>
              <a href="#moderator">moderator</a>
              <a href="#developer">developer</a>
              <a href="#audit">audit</a>
            </>
          )}

          {/* yvelas aqvs user */}
          {!adminRole[0] &&
            (userRole[0] ||
              moderatorRole[0] ||
              developerRole[0] ||
              auditRole[0]) && (
              <>
                <a href="#user">user</a>
              </>
            )}

          {/* moderators da developers moderatori da developeri aqvs */}
          {!adminRole[0] && (moderatorRole[0] || developerRole[0]) && (
            <>
              <a href="#moderator">moderator</a>
              <a href="#developer">developer</a>
            </>
          )}

          {/* audits auditi aqvs */}
          {!adminRole[0] && auditRole[0] && (
            <>
              <a href="#audit">audit</a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
