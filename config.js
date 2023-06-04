const object = {
	mapValueToLabel: (options, value) => {
		let ret;
		const one = options.find((item) => item.value === value);
		if (one) {
			ret = one.label;
		}
		return ret;
	},
	mapLabelToValue: (options, label) => {
		let ret;
		const one = options.find((item) => item.label === label);
		if (one) {
			ret = one.value;
		}
		return ret;
	},
	mapLabelToObj: (options, label) => {
		let ret = {};
		const one = options.find((item) => item.label === label);
		if (one) {
			ret = one;
		}
		return ret;
	},
	platformLocationOptions: [
		{ label: "jd", value: "https://www.jd.com" },
		{
			label: "taobao",
			value: "https://www.taobao.com"
		}
	],
	cartLocationOptions: [
		{
			label: "jd",
			value: "https://cart.jd.com/cart_index"
		},
		{
			label: "taobao",
			value: "https://cart.taobao.com/cart.htm"
		}
	],
	loginBtnTextOptions: [
		{
			label: "jd",
			value: "你好，请登录"
		},
		{
			label: "taobao",
			value: "亲，请登录"
		}
	],
	selectAllBtnOptions: [
		{
			label: "jd",
			value: "jdcheckbox",
			byWay: "className"
		},
		{
			label: "taobao",
			value: "J_SelectAll1",
			byWay: "id"
		}
	],
	checkoutBtnTextOptions: [
		{
			label: "jd",
			value: "去结算"
		},
		{
			label: "taobao",
			value: "去结算"
		}
	],
	payBtnOptions: [
		{
			label: "jd",
			value: "order-submit",
			byWay: "id"
		},
		{
			label: "taobao",
			value: "提交订单",
			byWay: "linkText"
		}
	],
	timeWaitToPayOptions: [
		{
			label: "jd",
			value: "0.4"
		},
		{
			label: "taobao",
			value: "0.2"
		}
	]
};

module.exports = object;
