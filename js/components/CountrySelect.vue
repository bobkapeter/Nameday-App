<template>
	<div class="country-select">
		<!--  -->
		<select class="select" :value="value" @change="changeEvent">
			<option
				v-for="countryCode in countryCodes"
				:key="countryCode"
				:value="countryCode"
			>{{ countryCode | upper }}</option>
		</select>
		<!--  -->
	</div>
</template>


<script>
export default {
	props: {
		countryCodes: Array,
		value: String
	},

	filters: {
		upper(val) {
			return String(val).toUpperCase();
		}
	},

	methods: {
		changeEvent($event) {
			this.$emit("input", $event.target.value);
			this.$root.$emit("countryChange", $event.target.value);
		}
	}
};
</script>


<style scoped>
.country-select {
	position: fixed;
	top: 0;
	right: 2em;
	z-index: 10;
	background-color: var(--primary-color);
	padding: 1em 2em;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
}
.country-select .select {
	font-size: 1em;
	font-family: "Nunito", sans-serif;
	border: 1px solid rgb(226, 226, 226);
	outline: none;
	padding: 0.2em 1em;
}
.country-select .select:focus {
	transition: all 0.24s ease-out;
}

@media screen and (max-width: 1300px) {
	.country-select {
		position: absolute;
		background-color: transparent;
	}
}

@media screen and (max-width: 1050px) {
	.country-select {
		right: 0em;
	}
}

@media screen and (max-width: 800px) {
	.country-select .select {
		padding: 0em 0.6em;
	}
}

@media screen and (max-width: 700px) {
	.country-select {
		padding: 0.3em 1em;
	}
}

@media screen and (max-width: 500px) {
	.country-select {
		left: 50%;
		transform: translateX(-50%);
		padding: 0.3em 1em;
	}
}
</style>