import { defineStore } from "pinia";

export const useUsersStore = defineStore("user", {
  state: () => ({
    userLists: [],
    totalUsers: 0,
    totalSKip: 0,
    userFirstName: null,
    userLastName: null,
    userDepartment: null,
    isEdit: false,
    userId: null,
  }),
  actions: {
    getAllUser(skip = 0) {
      fetch("https://dummyjson.com/users?limit=10&skip=" + skip)
        .then((res) => res.json())
        .then((json) => {
          let { users, total } = json;
          this.userLists = users;
          this.userLists.forEach(el => {
            el.lastName = this.maskLastName(el.lastName)
          })

          this.totalUsers = total;
          this.totalSKip = skip;
        })
        .catch(console.log);
    },

    deleteUser(id) {
      console.log("you are here");
      fetch("https://dummyjson.com/users/" + id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((json) =>
          this.alertHandler("success", `User ${json.firstName} Deleted`)
        )
        .catch(console.log);
    },

    addUser() {
      if (!this.userFirstName)
        return this.alertHandler("error", "Please Fill User First Name.");
      else if (!this.userLastName)
        return this.alertHandler("error", "Please Fill User Last Name.");
      else if (!this.userDepartment)
        return this.alertHandler("error", "Please Fill User Department.");
      else if (!this.isEdit) {
        fetch("https://dummyjson.com/users/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: this.userFirstName,
            lastName: this.userLastName,
            company: { department: this.userDepartment },
          }),
        })
          .then((res) => res.json())
          .then((json) => {
            this.alertHandler(
              "success",
              `User ${json.firstName} Added Sucessfully`
            );
            this.resetForm()
          })
          .catch(console.log);
      }
      else if(this.isEdit) {
        fetch("https://dummyjson.com/users/"+this.userId, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: this.userFirstName,
            lastName: this.userLastName,
            company: { department: this.userDepartment },
          }),
        })
          .then((res) => res.json())
          .then((json) => {
            this.alertHandler(
              "success",
              `User ${json.firstName} Updated Sucessfully`
            );
            this.resetForm()
            this.router.push('/')
          })
          .catch(console.log);
      }
    },

    editUser(id) {
      fetch("https://dummyjson.com/users/" + id)
        .then((res) => res.json())
        .then((json) => {
          this.userId = id;
          this.isEdit = true;
          this.userFirstName = json.firstName;
          this.userLastName = json.lastName;
          this.userDepartment = json.company.department;
          this.router.push("/user-form?edit=" + id);
        })
        .catch(console.log);
    },

    maskLastName(lastName) {
      let noMask = lastName[0]
      for(let i = 0; i < lastName.length - 1; i++){
        noMask += '*';
      }
      return noMask
    },

    alertHandler(sign, message) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: sign,
        title: message,
      });
    },

    resetForm() {
      this.userFirstName = null;
      this.userLastName = null;
      this.userDepartment = null;
      this.isEdit = false;
    }
  },
});
