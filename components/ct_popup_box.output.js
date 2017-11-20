"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CTPopupBox = (_dec = WebComponents.annotate({
	"attributes": {
		"properties": {
			"id": {
				"type": "string"
			}
		},
		"required": ["id"]
	},
	"container": true
}), _dec(_class = function (_HTMLElement) {
	_inherits(CTPopupBox, _HTMLElement);

	function CTPopupBox() {
		_classCallCheck(this, CTPopupBox);

		return _possibleConstructorReturn(this, (CTPopupBox.__proto__ || Object.getPrototypeOf(CTPopupBox)).apply(this, arguments));
	}

	_createClass(CTPopupBox, [{
		key: "attachedCallback",
		value: function attachedCallback() {
			var container = document.createElement('div');
			container.className = 'popupBG';
			container.style.display = 'none';

			var popupBox = document.createElement('div');
			popupBox.className = 'popupBox';

			while (this.childNodes.length !== 0) {
				popupBox.appendChild(this.childNodes[0]);
			}

			container.appendChild(popupBox);
			this.appendChild(container);
			this.opened = false;
			this.id = this.getAttribute("id");
		}

		// Toggles the menu opened and closed based on the value
		// of the this.opened property (initially set to false)

	}, {
		key: "togglePopup",
		value: function togglePopup() {
			var contextMenu = document.querySelector('ct-popup-box#' + this.id + ' > .popupBG');

			if (!this.opened) {
				this.opened = true;
				//contextMenu.addEventListener('click', this.closeMenu, true);
				contextMenu.style.display = 'flex';
			} else {
				this.opened = false;
				//contextMenu.removeEventListener('click', this.closeMenu);
				contextMenu.style.display = 'none';
			}
		}
	}]);

	return CTPopupBox;
}(HTMLElement)) || _class);


document.registerElement('ct-popup-box', CTPopupBox);