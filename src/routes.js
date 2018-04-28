import ReviewList from './ReviewList.vue';
import ReviewDetails from './ReviewDetails.vue';

export const routes = [
    { path: '', components: {
        default: ReviewList
    } },
    { path: '/reviews/:reviewId', name: 'reviewDetails', props: true, component: ReviewDetails },
    { path: '*', component: { template: '<h1>Page Not Found!</h1>' } }
];
