<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<router-link class="navbar-brand" to="/">Биржа</router-link>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<router-link tag="li" class="nav-item nav-link" to="/portfolio" activeClass="active">Профиль</router-link>
				<router-link tag="li" class="nav-item nav-link" to="/stocks" activeClass="active">Акции</router-link>
			</ul>

			<ul class="navbar-nav ml-auto">
				<li class="nav-item"><a class="nav-link" @click="endDay">Закончить день</a></li>
				<li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Сохранить или загрузить
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#" @click="saveData">Сохранить</a>
          <a class="dropdown-item" href="#" @click="loadData">Загрузить</a>
        </div>
        </li>
			<strong class="nav-item nav-link" style="color: #333">Деньги: {{ funds | currency }}</strong>
		</ul>

	</div>
</nav>
</template>

<script>
	import {mapActions} from 'vuex';
	export default {
		computed: {
			funds() {
				return this.$store.getters.funds;
			}
		},
		methods: {
			...mapActions({
				randomizeStocks: 'randomizeStocks',
				fetchData: 'loadData'
			}),
			endDay() {
				this.randomizeStocks();
			},
			saveData() {
				const data = {
					funds: this.$store.getters.funds,
					stockPortfolio: this.$store.getters.stockPortfolio,
					stocks: this.$store.getters.stocks
				};
				this.$http.put('data.json', data);
			},
			loadData() {
				this.fetchData();
			}
		}
	}
</script>