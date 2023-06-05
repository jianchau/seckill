const JD = "jd";
const TaoBao = "taobao";

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
	JD,
	TaoBao,
	platformLocationOptions: [
		{ label: JD, value: "https://www.JD.com" },
		{ label: TaoBao, value: "https://www.taobao.com" }
	],
	cartLocationOptions: [
		{
			label: JD,
			value: "https://cart.JD.com/cart_index"
		},
		{
			label: TaoBao,
			value: "https://cart.taobao.com/cart.htm"
		}
	],
	loginBtnTextOptions: [
		{
			label: JD,
			value: "你好，请登录"
		},
		{
			label: TaoBao,
			value: "亲，请登录"
		}
	],
	selectAllBtnOptions: [
		{
			label: JD,
			value: "jdcheckbox",
			byWay: "className"
		},
		{
			label: TaoBao,
			value: "J_SelectAll1",
			byWay: "id"
		}
	],
	checkoutBtnTextOptions: [
		{
			label: JD,
			value: "去结算"
		},
		{
			label: TaoBao,
			value: "去结算"
		}
	],
	payBtnOptions: [
		{
			label: JD,
			value: "order-submit",
			byWay: "id"
		},
		{
			label: TaoBao,
			value: "提交订单",
			byWay: "linkText"
		}
	],
	timeWaitToPayOptions: [
		{
			label: JD,
			value: "0.1"
		},
		{
			label: TaoBao,
			value: "0.1"
		}
	]
};

module.exports = object;
