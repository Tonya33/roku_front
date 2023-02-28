export default {
    name: 'TheAllUsersComponent',

    created() {
        //get all of our users from the database
        //connected to the roku

        //we would render a profile panel for each user using the sub component
        //inside the main component
    },
    template: `
    <div>
    <h1>This is the all users component</h1>
    </div>
    `,
    methods: {
        navToUserHome() {
            //navigate to the users homepage(parents / kids view)
            //we'll pass along the user object that goes with the user
        }
    }
}