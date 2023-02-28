export default {
    name: 'AllUsersComponent',

    template: `<section>
<h1>All User Should Show here</h1>
<h2>Who's using Roku?</h2>
</section>`,

    created() {
        fetch('/ums/users')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }

}