<template>
	<div class="search-form">
		<!--  -->
		<h2>Vyhľadávanie menín</h2>

		<!-- Tabs -->
		<div class="tabs">
			<button
				v-for="tab in tabs"
				:key="tab"
				:class="{selected : currentTab === tab}"
				@click="currentTab = tab"
			>{{ tab }}</button>
		</div>

		<!-- Text Input - Name -->
		<template v-if="currentTab === 'Podľa mena'">
			<input placeholder="Meno" type="text" key="input-name" v-model="inputName" />
		</template>

		<!-- Text Input - Date -->
		<template v-else>
			<input type="date" key="input-date" v-model="inputDate" />
		</template>

		<!-- Error Message -->
		<p class="error" :class="{visible : error}">{{ error }}</p>

		<!-- Results Component -->
		<the-results :results="results"></the-results>
	</div>
</template>


<script>
import { debounce } from "lodash";
import axios from "axios";

import TheResults from "./TheResults.vue";

export default {
	props: {
		countryCode: String
	},
	components: {
		TheResults
	},
	data() {
		return {
			tabs: ["Podľa mena", "Podľa dátumu"],
			currentTab: "Podľa mena",

			inputName: "",
			inputDate: "",

			error: "",
			results: []
		};
	},

	created() {
		this.debounceSearchByName = debounce(this.searchNamedayByName, 500);
		this.debounceSearchByDate = debounce(this.searchNamedayByDate, 500);
	},
	mounted() {
		this.$root.$on("countryChange", code => {
			this.resetInputs();
			this.clear();
		});
	},

	watch: {
		inputName() {
			this.debounceSearchByName();
		},
		inputDate() {
			this.debounceSearchByDate();
		},
		currentTab() {
			this.resetInputs();
			this.clear();
		}
	},
	methods: {
		resetInputs() {
			this.inputName = "";
			this.inputDate = "";
		},
		clear() {
			this.error = "";
			this.results = [];
		},
		getNameday(url) {
			return axios
				.get(url)
				.then(response => response.data)
				.catch(error => null);
		},
		async searchNamedayByName() {
			if (!this.inputName) {
				this.clear();
				return;
			}

			const url = `https://api.abalin.net/get/getdate?name=${this.inputName}&calendar=${this.countryCode}`;
			const data = await this.getNameday(url);

			if (data) {
				this.results = data.results;
				this.error = "";
			} else {
				this.results = [];
				this.error = "Pre hľadaný výraz neexistujú výsledky.";
			}
		},
		async searchNamedayByDate() {
			if (!this.inputDate) {
				this.clear();
				return;
			}

			const [, month, day] = this.inputDate.split("-");
			const url = `https://api.abalin.net/get/namedays?day=${day}&month=${month}&country=${this.countryCode}`;
			const { data } = await this.getNameday(url);

			if (data) {
				const key = `name_${this.countryCode}`;
				const { day, month, [key]: name } = data;

				this.results = [{ day, month, name }];
				this.error = "";
			} else {
				this.results = [];
				this.error = "Pre hľadaný výraz neexistujú výsledky.";
			}
		}
	}
};
</script>


<style scoped>
.search-form {
	position: relative;
	padding: 2em 0em;
	border-top: 1px solid rgb(226, 226, 226);
}
.tabs {
	width: 90%;
	max-width: 500px;
	display: flex;
	margin: 0 auto;
	margin-bottom: 3em;
}
.tabs button {
	cursor: pointer;
	width: 50%;
	display: block;
	background: rgb(231, 231, 231);
	color: #373c42;
	font-size: 14px;
	font-weight: bold;
	text-transform: uppercase;
	padding: 1.6em 0;
	letter-spacing: 0.1em;
	font-family: "Nunito", sans-serif;
	outline: none;
	border: none;
}
.tabs button.selected {
	background-color: var(--primary-color);
	color: white;
}
.search-form input {
	width: 80%;
	max-width: 420px;
	background: white;
	color: #161e2b;
	font-family: "Nunito", sans-serif;
	font-size: 16px;
	font-weight: bold;
	padding: 1em 1em;
	border: none;
	outline: none;
	border-bottom: 2px solid rgb(226, 226, 226);
	box-sizing: border-box;
}
.search-form input:focus {
	border-color: #161e2b;
	transition: all 0.24s ease-out;
}
.error {
	opacity: 0;
	height: 22px;
	transition: all 0.24s;
	margin-bottom: 0;
}
.error.visible {
	opacity: 1;
}

@media screen and (max-width: 1050px) {
	.tabs button {
		font-size: 13px;
		padding: 1.4em 0;
	}
}

@media screen and (max-width: 800px) {
	.tabs button {
		padding: 1em 0;
	}
}

@media screen and (max-width: 700px) {
	.tabs {
		max-width: 400px;
	}
	.tabs button {
		letter-spacing: 0.05em;
		padding: 0.6em 0;
		text-transform: none;
	}
}

@media screen and (max-width: 550px) {
	.tabs {
		width: 90%;
		max-width: 300px;
		/* display: block; */
	}
	.tabs button {
		width: 100%;
		padding: 1em 0;
	}
}
</style>