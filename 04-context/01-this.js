const team = {
  name: "leanguage Progaming",
  members: ["java", "python", "js", "C#"],
  membersOfTeam: function() {
    this.members.forEach(member => {
      console.log(`${member} of team ${this.name}`);
    });
  }
};

team.membersOfTeam();
