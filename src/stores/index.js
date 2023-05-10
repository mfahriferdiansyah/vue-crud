import { defineStore } from "pinia";

export const useUsersStore = defineStore("user", {
  state: () => ({
    userLists: [],
    totalUsers: 0,
    totalSKip: 0
  }),
  actions: {
    getAllUser(skip = 0) {
      fetch('https://dummyjson.com/users?limit=10&skip=' + skip)
        .then(res => res.json())
        .then(json => {
          let { users, total } = json
          this.userLists = users
          this.totalUsers = total
          this.totalSKip = skip
        })
        .catch(console.log);
    },

    deleteUser(id) {
      console.log('you are here')
      fetch('https://dummyjson.com/users/'+id, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(json => this.alertHandler('success', `User ${json.firstName} Deleted`));
    },

    alertHandler(sign, message) {
      const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
      })

      Toast.fire({
          icon: sign,
          title: message
      })
  },
  },
});
