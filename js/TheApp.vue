<template>
	<div id="app">
		<!-- Country Select Component -->
		<country-select v-bind:country-codes="countryCodes" v-model="countryCode"></country-select>

		<!-- Header Component -->
		<the-header></the-header>

		<main>
			<!-- Actual Nameday Component -->
			<actual-nameday v-bind:country-code="countryCode"></actual-nameday>

			<!-- Search Form Component -->
			<the-search-form v-bind:country-code="countryCode"></the-search-form>
		</main>

		<!-- Footer Component -->
		<the-footer></the-footer>
	</div>
</template>


<script>
import CountrySelect from "./components/CountrySelect.vue";
import TheHeader from "./components/TheHeader.vue";
import ActualNameday from "./components/ActualNameday.vue";
import TheSearchForm from "./components/TheSearchForm.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
	components: {
		CountrySelect,
		TheHeader,
		ActualNameday,
		TheSearchForm,
		TheFooter
	},

	data() {
		return {
			countryCodes: ["sk", "cz", "pl", "us"],
			countryCode: "sk"
		};
	}
};
</script>


<style>
#app {
	width: 100%;
	text-align: center;
	margin: 0 auto;
	border-radius: 20px;
	box-sizing: border-box;
}

#app h2 {
	font-size: 6em;
	padding: 0 0.3em;
	margin-top: 1em;
	box-sizing: border-box;
}

@media screen and (max-width: 1400px) {
	#app h2 {
		font-size: 5em;
	}
}
@media screen and (max-width: 1050px) {
	#app h2 {
		font-size: 4em;
	}
}
@media screen and (max-width: 800px) {
	#app h2 {
		font-size: 3em;
	}
}
</style>