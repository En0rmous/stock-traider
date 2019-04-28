<template>
		<div class="col-sm-6 col-md-12 p-3">
		<div class="card bg-light">
				<h5 class="card-header alert-info">{{ stock.name }} <small>(Цена: {{ stock.price }} | Количество: {{ stock.quantity }})</small></h5>
			<div class="card-body">
				<p class="card-text">
					<div class="input-group">
							<div class="col-xs-12 col-sm-8">
								<input 
								type="text" 
								class="form-control"
								placeholder="Quantity" 
								v-model.number="quantity"
								:class="{danger: erroredQuantity}"
								>	
							</div>
							<div class="col-xs-12 col-sm-4">
								<button href="#" 
								@click="sellStock" 
								class="btn btn-success"
								:disabled="erroredQuantity || quantity <= 0 || !Number.isInteger(quantity)"
								>{{ erroredQuantity ? "Не достаточно акций" : "Продать" }}</button>
							</div>
						</div>
				</p>		
			</div>
		</div>
	</div>
</template>
<style scoped>
	.danger {
		border: 1px solid tomato;
	} 
</style>
<script>
	import { mapActions } from 'vuex';
	export default {
		props: ['stock'],
		data() {
			return {
				quantity: 0
			};
		},
		computed: {
			erroredQuantity() {
				return this.quantity > this.stock.quantity;
			}
		},
		methods: {
			...mapActions({
				placeSellOrder: 'sellStock'
			}),
			sellStock() {
				const order = {
					stockId: this.stock.id,
					stockPrice: this.stock.price,
					quantity: this.quantity
				};
				this.placeSellOrder(order);
			}
		}
	}
</script>