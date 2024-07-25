let userRole = "employee";
let accessLevel;

if (userRole === "employee") {
    accessLevel = "Access to Dietary Services";
} else if (userRole === "enrolled member") {
    accessLevel = "Dietary services and one-on-one interaction with dietician";
} else if (userRole === "subscriber") {
    accessLevel = "partial access to Dietary services";
} else if (userRole === "non-subscriber") {
    accessLevel = "need to enroll or subscribe";
} else {
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);