class students {
    getRole() {
        console.log("Teju is cooking delicious food");
    }

}
class primary extends students {
    getRole() {
        console.log("Teju is dancing Bharatanatyam");
    }
}
class secondary extends students {
    getRole() {
        console.log("Teju is washing clothes");
    }
}
const data = new primary();
data.getRole();
const details = new secondary();
details.getRole();
const work = new students();
work.getRole();