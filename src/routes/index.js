import {createRouter, createWebHistory} from "vue-router";
import roleSelectionComponent from "@/team-activities/pages/role-selection.component.vue";
import leaderComponent from "@/team-activities/pages/leader.component.vue";
import memberComponent from "@/team-activities/pages/member.component.vue";
import createTeamComponent from "@/team-activities/pages/create-team.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Home


        // Restaurants







        // Orders





        //Team Activities
        { path: '/team-activities', name:'team-activities', component: roleSelectionComponent, meta: {title: 'Team Activities'}},
        { path: '/team-activities/create-team', name: 'team-activities-create-team', component: createTeamComponent, meta: { title: 'Create Team' }},
        { path: '/team-activities/leader', name:'team-activities-leader', component: leaderComponent, meta: {title: 'Leader'}},
        { path: '/team-activities/members', name:'team-activities-members', component: memberComponent, meta: {title: 'Members'}},



        // Profile


        // Notifications


        ]
});

router.beforeEach((to, from, next) => {
  let baseTitle = 'GastroGo';
  document.title = `${baseTitle} - ${to.meta['title']}`;
  next();
})

export default router;
