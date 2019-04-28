<template>
	<div class="p-3">
		<h1>Поторгуйся или посмотри свое портфолио</h1>
		<h6>Ты можешь сохраниться или загрузиться из своих данных</h6>
		<h6>Нажми "Закончить день", чтобы перейти к следующему дню торгов</h6>
		<hr>
		<p>Твои деньги: {{ funds | currency }}</p>
	</div>
</template>


<script>
	export default {
		computed: {
			funds() {
				return this.$store.getters.funds;
			}
		}
	}
</script>