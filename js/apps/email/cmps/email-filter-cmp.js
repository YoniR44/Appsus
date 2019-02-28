export default {
    template: `
        <section>
            <input class="email-filter" @keyup="emitFilter" v-model="filterBy.term" type="text" placeholder="Search in emails">
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