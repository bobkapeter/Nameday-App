<template>
	<section class="actual-nameday">
		<!--  -->
		<h2>Meniny v týchto dňoch</h2>

		<ul class="actual-nameday-list">
			<li>
				Včera:
				<strong>{{ yesterday }}</strong>
			</li>
			<li>
				Dnes:
				<strong>{{ today }}</strong>
			</li>
			<li>
				Zajtra:
				<strong>{{ tomorrow }}</strong>
			</li>
		</ul>
		<!--  -->
	</section>
</template>


<script>
import axios from "axios";

export default {
	props: {
		countryCode: String
	},
	data() {
		return {
			today: "",
			tomorrow: "",
			yesterday: "",
			code: this.countryCode
		};
	},
	mounted() {
		this.update();

		this.$root.$on("countryChange", code => {
			this.code = code;
			this.update();
		});
	},
	methods: {
		getNameday(url) {
			return axios
				.get(url)
				.then(response => response.data.data)
				.catch(error => null);
		},
		async getNamedayForToday() {
			const url = `https://api.abalin.net/get/today?country=${this.code}`;
			const key = `name_${this.code}`;
			const data = await this.getNameday(url);

			this.today = data ? data[key] : "";
		},
		async getNamedayForTomorrow() {
			const url = `https://api.abalin.net/get/tomorrow?country=${this.code}`;
			const key = `name_${this.code}`;
			const data = await this.getNameday(url);

			this.tomorrow = data ? data[key] : "";
		},
		async getNamedayForYesterday() {
			const url = `https://api.abalin.net/get/yesterday?country=${this.code}`;
			const key = `name_${this.code}`;
			const data = await this.getNameday(url);

			this.yesterday = data ? data[key] : "";
		},
		update() {
			this.getNamedayForToday();
			this.getNamedayForTomorrow();
			this.getNamedayForYesterday();
		}
	}
};
</script>


<style scoped>
.actual-nameday {
	margin-bottom: 6em;
}
.actual-nameday-list {
	width: 80%;
	max-width: 800px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	padding: 0;
	margin: auto;
	margin-bottom: 2em;
}
.actual-nameday-list li {
	width: 30%;
	display: block;
	font-weight: bold;
	text-align: left;
	margin: 0 auto;
	margin-bottom: 0.6em;
	border-radius: 10px;
}
.actual-nameday-list strong {
	display: block;
	background-color: var(--primary-color);
	color: white;
	padding: 0.4em 1em;
	border-radius: 0.5em;
	margin-top: 0.2em;
}

@media screen and (max-width: 700px) {
	.actual-nameday-list {
		width: 95%;
	}
}

@media screen and (max-width: 500px) {
	.actual-nameday-list {
		width: 90%;
		display: block;
	}
	.actual-nameday-list li {
		width: 100%;
		max-width: 300px;
		white-space: pre-line;
	}
	.actual-nameday-list li strong {
		display: inline-block;
	}
}
</style>