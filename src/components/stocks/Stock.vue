<template>
	<div class="col-sm-6 col-md-6 p-3">
		<div class="card bg-light">
				<h5 class="card-header alert-success">{{ stock.name }} <small>(Цена: {{ stock.price }})</small></h5>
			<div class="card-body">
				<p class="card-text">
					<div class="input-group">
							<div class="col-xs-12 col-sm-8">
								<input 
								type="text" 
								class="form-control"
								placeholder="Quantity" 
								v-model.number="quantity"
								:class="{danger : toLowFunds}"
								>	
							</div>
							<div class="col-xs-12 col-sm-4">
								<button href="#" 
								@click="buyStock" 
								class="btn btn-success"
								:disabled="quantity <= 0 || !Number.isInteger(quantity) || toLowFunds"
								>{{ toLowFunds ? "Не достаточно средств" : "Купить" }}</button>
							</div>
						</div>
				</p>		
			</div>
		</div>
	</div>
</template>

<style scoped>
	.danger {
		border : 1px solid tomato;
	}
</style>

<script>
	export default {
		props: ['stock'],
		data() {
			return {
				quantity: 0
			};
		},
		computed: {
			funds() {
				return this.$store.getters.funds;
			},
			toLowFunds() {
				return this.quantity * this.stock.price > this.funds;
			}
		},
		methods: {
			buyStock() {
				const order = {
					stockId: this.stock.id,
					stockPrice: this.stock.price,
					quantity: this.quantity
				};
				console.log(order);
				this.$store.dispatch('buyStock', order);
				this.quantity = 0;
			}
		}
	}
</script>