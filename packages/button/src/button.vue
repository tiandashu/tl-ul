<template>
	<button class="tl-button" :class="[`tl-button--${type}`]">
		<slot>确认</slot>
	</button>
</template>

<script>
export default {
	name: 'TlButton',
	props: {
		type: {
			type: String,
			default: 'primary',
			validator(val) {
				return [
					'default',
					'primary',
					'info',
					'success',
					'warning',
					'danger',
				].includes(val)
			},
		},
	},
}
</script>

<style lang="scss">
.tl-button {
	display: inline-block;
	line-height: 1;
	white-space: nowrap;
	cursor: pointer;
	background: #fff;
	border: 1px solid #dcdfe6;
	border-color: #dcdfe6;
	color: #606266;
	-webkit-appearance: none;
	text-align: center;
	box-sizing: border-box;
	outline: none;
	margin: 0;
	transition: 0.1s;
	font-weight: 500;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	padding: 12px 20px;
	font-size: 14px;
	border-radius: 4px;

	&--primary {
		color: #fff;
		background-color: #409eff;
		border-color: #409eff;
	}
	&--info {
		color: #fff;
		background-color: #909399;
		border-color: #909399;
	}
	&--success {
		color: #fff;
		background-color: #67c23a;
		border-color: #67c23a;
	}
	&--warning {
		color: #fff;
		background-color: #e6a23c;
		border-color: #e6a23c;
	}
	&--danger {
		color: #fff;
		background-color: #f56c6c;
		border-color: #f56c6c;
	}
}
</style>
