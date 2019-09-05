<template>
    <div>1112</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name:'Sidebar',
    computed: {
        ...mapGetters([
            'permission_routes',
            // 'sidebar'
        ]),
    }
}
</script>

