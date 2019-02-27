export default {
    template: `
        <section class="email-filter">
            <h3>Filter By</h3>
            <input @keyup="emitFilter" v-model="filterBy.term" type="text" placeholder="Search in emails">
        </section> 
    `,
    data() {
        return {
            filterBy: {
                
            }
        }
    },
    methods: {
        emitFilter() {
            console.log('Emitting to Parent');
            this.$emit('filtered', { ...this.filterBy })
        }
    }
}