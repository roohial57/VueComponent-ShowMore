
<template>
    <span class="show-more">
        <span v-show="false" ref="input">
            <slot />
        </span>

        <tooltip v-if="showTooltip" :title="tooltipHeader" :color="tooltipColor" :text="text">
            <span class="full-text" v-if="moreVisible" v-html="html"></span>
            <span class="short-text" v-else>{{ shortText }}</span>

            <template v-if="full">
                <template v-if="showMore">
                    <span v-if="!moreVisible" class="cursor-pointer" @click="moreVisible = true">{{ moreText }}</span>
                    <span v-else-if="showLess" class="cursor-pointer" @click="moreVisible = false">{{ lessText }}</span>
                </template>
                <span v-else>{{ moreText }}</span>
            </template>
        </tooltip>

        <template v-else>
            <span class="full-text" v-if="moreVisible" v-html="html"></span>
            <span class="short-text" v-else>{{ shortText }}</span>

            <template v-if="full">
                <template v-if="showMore">
                    <span v-if="!moreVisible" class="cursor-pointer" @click="moreVisible = true">{{ moreText }}</span>
                    <span v-else-if="showLess" class="cursor-pointer" @click="moreVisible = false">{{ lessText }}</span>
                </template>
                <span v-else>{{ moreText }}</span>
            </template>
        </template>

    </span>
</template>

<script>
import Tooltip from './Tooltip.vue';
export default {
    name: "show-more",
    components:{
        'tooltip':Tooltip
    },
    data() {
        return {
            text: '',
            html: null,
            moreVisible: false,
        };
    },
    props: {
        length: {
            default: 50,
        },
        showMore: {
            default: true,
        },
        moreText: {
            default: '...',
        },
        showLess: {
            default: true,
        },
        lessText: {
            default: `×`,
        },
        showTooltip: {
            default: true,
        },
        tooltipHeader: {
            default: '',
        },
        tooltipColor: {
            default: `primery`,
        },
    },
    computed: {
        shortText() {
            return this.text.length < this.length ? this.text : this.text.substr(0, this.length)
        },
        full() {
            return this.text.length > this.length
        }
    },
    updated() {
        this.text = this.$refs.input.innerText.trim();
        this.html = this.$refs.input.innerHTML.trim();
    },
    mounted() {
        this.text = this.$refs.input.innerText.trim();
        this.html = this.$refs.input.innerHTML.trim();
    }
}
</script>

<style>
</style>
