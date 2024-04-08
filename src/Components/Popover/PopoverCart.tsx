import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import './PopoverCart.scss'
import { FiShoppingCart } from 'react-icons/fi'
import ButtonShoppe from '../ButtonShoppe/ButtonShoppe'
interface Cart {
  id: number
  title: string
  price: number
  image: string
}

const fakeCart: Cart[] = [
  {
    id: 1,
    title: 'Module thời gian thực RTC DS1307 + AT24C32 kèm pin Cr2032',
    price: 13.999,
    image:
      'data:image/webp;base64,UklGRg4QAABXRUJQVlA4IAIQAADwSwCdASqWANoAPkEcjEOioaEXWQXIKAQEtIAJ+U/J8wN7W84SJx8u+/H53+4/uX8au1XgEfj/89/zP5Z8XAAP6zf4r8wf8P8W3zv+z9JPsh/r/cC/m37VfmNzWv3//p+wJ/Lf7N/qfuK+oD+3/5v+e/y/7J+4/6M/5f+S/KL7Cv5j/Wv91/hfbM9gP7g+xd+q//bS/aF3nH/kgsAurAayUZI+x+vRiiguAT33G0spsxHkbRnGHRS6Xdw58dyufRdCSOB7AW1797t/9XOpRuBoPHQh65Soox3eddz+GyaDE4TzRKIfkCwtkn2s4ejX9shqli6LkXEdl5a8wvxc8WEEKQMTE7HPd1e9cye7QheDQzVhLs1OqJctGhcN1qsO1C5VUB6PW07RTRVpPv7NvYFAGrS++V7GPRvGoS6qrE5YwwzxUHuQ6omLG8YLXVehDyFC42L0zdI0+jS1HcdcixZ404Or3dNDOt9Odkc+16rWC3CgC43w7BdGakLpP0h7kXVdo26syJUn9M+0tzYnk7dzImAXzt7jZtBpglctRm+XaKdnYCgKKd+haVylVvyj5z9IraP6fDug2u5z0bUe3FjeHlqCl2VT22Qb8dWeaF07w3uB5Tg7HzL4RS0OAv7u3Qss5GHE+79yflmtTDKY1P3WmkLIOH9pNy7ARu0SjIW+JOtJt+oKdn5FBbtumfqidNnjP8pGVebZ0Z23SHEIs0QMAgMem9frUAuXvEBR/Ri1rLMJF0NpxW2HWZSnOSBBpbyNpBQz2uqo2X/QZlSUlvwKY2Dyi9K0903cbiK2X98FvKF/yqkl+ZAAAP7+JGn6wazdM5tycxyxH10HhH/hl0Vh6UhsmTwfQaexSyODY96tb+zUeYZ2MP3de3ZZF48R0aYobe+Riw8Yk4c5sE8ZymrWjkIp9SQIXS5Ks6JC82wbBLdyXd6mI7VH4JYvoa5YrWwul+wS3h2bGAgrbjBvBsbR0dmqMFM3E/a5CI9HDdOkJwBAHfJcrDeFn2dJMYd+Y0htepf/Yx/+Nr5FK0AaGd8b0ikuwzmAnlYv3ncyz7jf1FymSWtma3+LKrZCaXBlX1DRJcKLAqzq5XZ/CosGW98W/nXPci0SE7As6kFQfDUd6BS2NVks/sThGpyDpm1eJCdW5RDcafMPGMmJXtiQ9Qx6027iYAWGOVACwwxU1G2zglhWk2yxwRaw/LHimOuZ/9+EHhfH0WZ7gBi1/x0LYkfN/J2fMceA7msKVADGQ/WVm6i+lArxu3UIbW9wzODo2A7yqSxzIRZihWpe61eE2XLyJefG1qBdUND/00M8bO0P8qUaoO06kanRdoIuQavBQvUSoWsI4kGjFWnLyI2HB5UxcHc90GCyI22IpVS3vxs/ABZjN1wjz5BZu01d8HmjzQ02Hr52L8t6Fwza6tHkbR3IR3bRG+e6YpZ2gUfTFNtDlDV+B/xWaT8YoTVuJ27lT5MTPXuidevDb7G6xchEAMkHmhBxEkfopmGAGm3CZ0BuJExehowt8smHUZcbBrZMVqAtExiPp5LtNn/dQLT/xOHulfuX8bVrhKYx+363IKgiCUwqNE67P/CyjaIa5s5gXXY0I0JHJDpk5vWsbrUScxK+OzpJAS8LtT1v7l/GkjcZXyzKODh/FDxzXo03UMkFGyVtK5PqR3Zuewme+K0x2uaBi/OVysYRfGpKI/3/US8GoOusbPje08LmQbfPB631mdlI3g7byKUwKPi0r8XLAVPGU/KUxPg/IxgdDqJJlCwdJUzCuKGR1Yz4uVe26EHk42KKtnpYDbUIkvz0O6vG9w0OOufmJwhf33tg0Z73PQPjjd8AYXVrkec6LTikAUm5rkuHLLtgPbA4Y0hVQ/t1etXpyFv6SE2qP81CxvKPOsV2Jp3sS/s5zxPt3C0M1yoFMLciaN01CG30a1I+XMyZ5dugqmAhZXN3PPys7wP1h7B9J4pw3rXDXyiR5WysXZSrmP7mdenmkhI1tVriMzhK9CjpQHnadJb47ElG/4QSzzp87Yd5M6aYO7YTJcapzlpSosTsJVadlRe//RrYwE1y6V3A4GffHaJLDVFu9BKh6V0/6eozVPY4ZlpbNm8R4thcAw/vRyyu3Gr2op9srjbkCuBqNYP/EOjI9ZYRcRAcAQKrXdAQWYMiDq9SMp7HpQ6DPV5N0377JT21T7maUKknajuOKyFnFtY4um8VIA/mAGaswQoAQhUWZ9/0VlCdLl6CBPD0xv/hLowgswXEKCvT1G44qxuD0/YNiBtnJKUtjuR9oBmLWVavi+fGp49wH4uHv2jiMHjxq15fdxZELJZPSbpFNoFlg5LRiQK6EvR1rEJsWYwjOxogddp3cOd6CPduVxhEdHV+X2up/aRFKXikdbbgw2rIqkvDFbSu8hKyb38kD+bAbkG8r8uL0R2YtSvHEhnZ75w+X+04TMRhfVm5i5q2MCPqvFBRBXG3YSsAkUA1oC+8pg0XOTbYs0DygTxbbwDstRZN8sVN3P3FbNjkoER8ztltzMX78xZc1HaXheTy9Cn11s6SetD2YKPzVQWqjRbF/aKnip7cojW6/hMo8QSN4+E3ud4+Mdlyjhe+txruQVeIyEcKWKBkZ8gEGsF45t6ospINEwzPOb9Lbntjg7zGVW8XLsxRJF5Yh1mv02aiNDRB8pgGAhOBBUQiu7c7CBO93jm6ReB6trwY/QTXtyw/LwngfSpiLV7ARmBPDxlrVfh8Dylz2/HkQJrVN7NW+t5guKpSNk9FIz2L/++CTZG65Chx98hmvpE7UhgvzjQik27agjbSQNO0uCMlrC4U8wNux5BUL8QQ8HSbLWZTiGJSj7tzT84op/v3u1dbnuNSZtzkeR5N72FTBiJEnVx2OibZtfkmQWwTNI3i0SJOz0UMF5JjtaabWok3h1N0M9AIJQi7cuhT+wVGP1MsPBDevuwBkuqN3i3cKW0GejZrKCKnpUKDidoRiecuDkW/F+jQ6khr3rzrTtRfYMm/g2f8rNj+sNG2+UgTtIDlgXgA5FY7m+aLTnXkgYdin8JO8740dmGjhuFEad1dyyLzSwOHuQtrZf2S+tuG97RbGkeZplhoUtdst/x1Y5771vJ8lTO4W4z0SXtIyuJLDyPC3FUQMwyDzYdEi443UrZVaZ8sStIVN2x7HcxoTM7Qtu0xgJU9Jr0S8OeEiFrrwDgjjhTi+DAVs0d9VRmwdyv0sK7ZUk37A8rbtBD6ns3VaKnvgSz/y3/JFvKiYBXJL6RlqOTcw74rFzVowql5ozqwfSC3NLTKf8NOOjd+HF3QGcKbjcfBV64mx6kXDt1N0GkElRhqH91wOM2iAC14jQDcNFg5bSdhH3zvp1jgf7HzSQbzGVOxjrjn7xEn2vlZfbTbHYL2me4ZzWfYEM+F/toYyGDNR1QJ1cP8U3yhWXPSg85TnBoAClM6hlAyZOjoVQLX/GakvqUdEG2ltXDjagZ06/91d98KDGA/mbUikD0YwP0+L2WmH1hEg65YXzVbICA8+Gsib1vTPm1FKZKZU2hT9LnOIdV98rSaDTu3hyDO4CVa2xDg6DlQ7xBRr8Hccc7RhACKZ/Zb6VNwsQ39Q2GaqB+Xs2+oJkwppkXY1szWLtH7j6oUYwhRGJvkkHTZGg74NH71ODIkem4P/mWHkxjVWrNwJJJOBVNx/VZPtHcyQ0Z+OU0ti/+CwhOfN4dyX0tD1b2JtwQ6CAZQlU/psvKAAatArW5eQjR+fL9pf86T0rD4qsgGZNCmkByEbxyHIuO5y19mBf5JCVZBYp+8wYDiOsjPDPUI+Svfr0GeyKTerPVh9qNmlaVvj8uZJ2sjlARCoXTZLUgm89c6ViFKk6Vy8eqpO7zTI20vFwzT+CAyOfxUvo1FPxmg/4Zm+6u3lQCiZnHigUqnCxT/xNJ6bYPwgzgVzMEoZYbbL42lo2zC2037i5JPI79jWgef+ZNXFImuGOQUG9+USDLbQz86PItBRPhxa4jJyryr/3G+AmU/AJcvxLr71nWWCoscRDTlVQIcey2slUkPZBlVIcc6t8ggUvRrYXJMefcv7LLDL/ZVq6QFzm+4kufzPaF8jd8aOyq6mgrlpf7z6FRIUGOmLpl0BOcvJJlEZAVKewJJT2+KHpYGP4tZjhOIEVJTICI7WZsJe/RUw20dFw/NWOcXi5Xn0tQPN6/mJseTpV1zPGJoc8vU+52WMfmWTnq9Xt3Zg/+t7/v1l5K4+fnNbsNeXWww4GYwdAZ56rcK/m7fJvPx4k0ABCPLE30yUbPpE83wrKLLbXWu2mv3xlz7AOs0VdRnLLXfefm5dgktTFnCPhXnz1j3sC5lNEOJOriFaWmYeEg1WkwWQqTTFFgia71SubwMkKkYhpbvk5n6IasiYPV8CjmoBy8ZomawZHiiQ2SlJTE6ftwkdEP3NYpQ6UiPNEzK50M2LD9Nz1l8M7ddkZfjqM6bpI+ppy28HC584mGu6P/kZ0pfl4xrpS/5/0G92E2Gjon8YrnwI9ZvD8PiC80tXBQmdeC8qqSMcTud2Bz2qOZjbzYAtcr/Al9bRs+ERWsmVzp8/u3ID/GSuwjUADLsN/taaRnOVF7UPseyngPnAGz6t8hv/0YFs2tBSFpL04RnkuAJNo307hxNj8WEWGOe/Q74mJody/gZQ7W0uGKPGmS627DZEEvER7YXfJw7gv9813aQu0QZB3n5lKkrhEez0+1pJ67xbIIbG1GrrGe77MzlqR3i8ZM0DvrTcDZyhVGvckaS7tozSoTvAniFNi037wAsq7l1CcuF9IOKbcpCfKPX7X+Gh3sS+4frhipd5eoGYLD2RwB8LN5pg5N0htIyxurmjtA2EeoB/o0xgEE06IEs3455Wl5Y1q4Ah8t639dEzrsKD4xrIQj2d4MlN7aUymPb+FRz9c+J8g2jzSRTtjFhb9ukchWNyWh5CfERcaSEAF7utweti94P0rPHtCMrt5vUnjgj1BXe9woSnErj4xK6iZMECu+SLhs45MIrL2DFzQBTl5rcN73ejIHlUqolqRKiQ/09REWAETsgEDtZzHfNk9VabmT59gdhXo2cxQDvGzLOfgq9ysSwsVStxkG4MEIiRcbzhnRgRQJ8MYQGYn+0bqRrcoHekz0ovxQ7xjhsrNqNYV3/PtHROkpbzCxOcBy659fP9izqZFmTbjxwibFo9chE1Wi0tHSuCd2WqKVDaM/Hd4qdV9ghztzihMq5gqBbyL31dQr2e7gXjBESsBeol/wKJT/BVWxeuca0QOZi4P/DO0yOHsHmQEulcL5+Ck4FlKKtWie7a8u+m/3fd8wcOlEzykyj6No/AXTAb4JeAQK/3Fo3KFaehQkBZTe0iGS26QiOIedVEC7crcrkPC53WU0ZClRwI1m0SERVabcN0S6QSyuJSS3mZJbHF5ieCJavWNWl0DAUCmAjLcm4A0is0gU5VSR1VougagccDcqkwkBL1lOAAAA='
  },
  {
    id: 2,
    title: 'Module thời gian thực RTC DS1307 + AT24C32 kèm pin Cr2032',
    price: 13.999,
    image:
      'data:image/webp;base64,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'
  },
  {
    id: 3,
    title: 'Module thời gian thực RTC DS1307 + AT24C32 kèm pin Cr2032',
    price: 13.999,
    image:
      'data:image/webp;base64,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'
  },
  {
    id: 4,
    title: 'Module thời gian thực RTC DS1307 + AT24C32 kèm pin Cr2032',
    price: 13.999,
    image:
      'data:image/webp;base64,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'
  },
  {
    id: 5,
    title: 'Module thời gian thực RTC DS1307 + AT24C32 kèm pin Cr2032',
    price: 13.999,
    image:
      'data:image/webp;base64,UklGRg4QAABXRUJQVlA4IAIQAADwSwCdASqWANoAPkEcjEOioaEXWQXIKAQEtIAJ+U/J8wN7W84SJx8u+/H53+4/uX8au1XgEfj/89/zP5Z8XAAP6zf4r8wf8P8W3zv+z9JPsh/r/cC/m37VfmNzWv3//p+wJ/Lf7N/qfuK+oD+3/5v+e/y/7J+4/6M/5f+S/KL7Cv5j/Wv91/hfbM9gP7g+xd+q//bS/aF3nH/kgsAurAayUZI+x+vRiiguAT33G0spsxHkbRnGHRS6Xdw58dyufRdCSOB7AW1797t/9XOpRuBoPHQh65Soox3eddz+GyaDE4TzRKIfkCwtkn2s4ejX9shqli6LkXEdl5a8wvxc8WEEKQMTE7HPd1e9cye7QheDQzVhLs1OqJctGhcN1qsO1C5VUB6PW07RTRVpPv7NvYFAGrS++V7GPRvGoS6qrE5YwwzxUHuQ6omLG8YLXVehDyFC42L0zdI0+jS1HcdcixZ404Or3dNDOt9Odkc+16rWC3CgC43w7BdGakLpP0h7kXVdo26syJUn9M+0tzYnk7dzImAXzt7jZtBpglctRm+XaKdnYCgKKd+haVylVvyj5z9IraP6fDug2u5z0bUe3FjeHlqCl2VT22Qb8dWeaF07w3uB5Tg7HzL4RS0OAv7u3Qss5GHE+79yflmtTDKY1P3WmkLIOH9pNy7ARu0SjIW+JOtJt+oKdn5FBbtumfqidNnjP8pGVebZ0Z23SHEIs0QMAgMem9frUAuXvEBR/Ri1rLMJF0NpxW2HWZSnOSBBpbyNpBQz2uqo2X/QZlSUlvwKY2Dyi9K0903cbiK2X98FvKF/yqkl+ZAAAP7+JGn6wazdM5tycxyxH10HhH/hl0Vh6UhsmTwfQaexSyODY96tb+zUeYZ2MP3de3ZZF48R0aYobe+Riw8Yk4c5sE8ZymrWjkIp9SQIXS5Ks6JC82wbBLdyXd6mI7VH4JYvoa5YrWwul+wS3h2bGAgrbjBvBsbR0dmqMFM3E/a5CI9HDdOkJwBAHfJcrDeFn2dJMYd+Y0htepf/Yx/+Nr5FK0AaGd8b0ikuwzmAnlYv3ncyz7jf1FymSWtma3+LKrZCaXBlX1DRJcKLAqzq5XZ/CosGW98W/nXPci0SE7As6kFQfDUd6BS2NVks/sThGpyDpm1eJCdW5RDcafMPGMmJXtiQ9Qx6027iYAWGOVACwwxU1G2zglhWk2yxwRaw/LHimOuZ/9+EHhfH0WZ7gBi1/x0LYkfN/J2fMceA7msKVADGQ/WVm6i+lArxu3UIbW9wzODo2A7yqSxzIRZihWpe61eE2XLyJefG1qBdUND/00M8bO0P8qUaoO06kanRdoIuQavBQvUSoWsI4kGjFWnLyI2HB5UxcHc90GCyI22IpVS3vxs/ABZjN1wjz5BZu01d8HmjzQ02Hr52L8t6Fwza6tHkbR3IR3bRG+e6YpZ2gUfTFNtDlDV+B/xWaT8YoTVuJ27lT5MTPXuidevDb7G6xchEAMkHmhBxEkfopmGAGm3CZ0BuJExehowt8smHUZcbBrZMVqAtExiPp5LtNn/dQLT/xOHulfuX8bVrhKYx+363IKgiCUwqNE67P/CyjaIa5s5gXXY0I0JHJDpk5vWsbrUScxK+OzpJAS8LtT1v7l/GkjcZXyzKODh/FDxzXo03UMkFGyVtK5PqR3Zuewme+K0x2uaBi/OVysYRfGpKI/3/US8GoOusbPje08LmQbfPB631mdlI3g7byKUwKPi0r8XLAVPGU/KUxPg/IxgdDqJJlCwdJUzCuKGR1Yz4uVe26EHk42KKtnpYDbUIkvz0O6vG9w0OOufmJwhf33tg0Z73PQPjjd8AYXVrkec6LTikAUm5rkuHLLtgPbA4Y0hVQ/t1etXpyFv6SE2qP81CxvKPOsV2Jp3sS/s5zxPt3C0M1yoFMLciaN01CG30a1I+XMyZ5dugqmAhZXN3PPys7wP1h7B9J4pw3rXDXyiR5WysXZSrmP7mdenmkhI1tVriMzhK9CjpQHnadJb47ElG/4QSzzp87Yd5M6aYO7YTJcapzlpSosTsJVadlRe//RrYwE1y6V3A4GffHaJLDVFu9BKh6V0/6eozVPY4ZlpbNm8R4thcAw/vRyyu3Gr2op9srjbkCuBqNYP/EOjI9ZYRcRAcAQKrXdAQWYMiDq9SMp7HpQ6DPV5N0377JT21T7maUKknajuOKyFnFtY4um8VIA/mAGaswQoAQhUWZ9/0VlCdLl6CBPD0xv/hLowgswXEKCvT1G44qxuD0/YNiBtnJKUtjuR9oBmLWVavi+fGp49wH4uHv2jiMHjxq15fdxZELJZPSbpFNoFlg5LRiQK6EvR1rEJsWYwjOxogddp3cOd6CPduVxhEdHV+X2up/aRFKXikdbbgw2rIqkvDFbSu8hKyb38kD+bAbkG8r8uL0R2YtSvHEhnZ75w+X+04TMRhfVm5i5q2MCPqvFBRBXG3YSsAkUA1oC+8pg0XOTbYs0DygTxbbwDstRZN8sVN3P3FbNjkoER8ztltzMX78xZc1HaXheTy9Cn11s6SetD2YKPzVQWqjRbF/aKnip7cojW6/hMo8QSN4+E3ud4+Mdlyjhe+txruQVeIyEcKWKBkZ8gEGsF45t6ospINEwzPOb9Lbntjg7zGVW8XLsxRJF5Yh1mv02aiNDRB8pgGAhOBBUQiu7c7CBO93jm6ReB6trwY/QTXtyw/LwngfSpiLV7ARmBPDxlrVfh8Dylz2/HkQJrVN7NW+t5guKpSNk9FIz2L/++CTZG65Chx98hmvpE7UhgvzjQik27agjbSQNO0uCMlrC4U8wNux5BUL8QQ8HSbLWZTiGJSj7tzT84op/v3u1dbnuNSZtzkeR5N72FTBiJEnVx2OibZtfkmQWwTNI3i0SJOz0UMF5JjtaabWok3h1N0M9AIJQi7cuhT+wVGP1MsPBDevuwBkuqN3i3cKW0GejZrKCKnpUKDidoRiecuDkW/F+jQ6khr3rzrTtRfYMm/g2f8rNj+sNG2+UgTtIDlgXgA5FY7m+aLTnXkgYdin8JO8740dmGjhuFEad1dyyLzSwOHuQtrZf2S+tuG97RbGkeZplhoUtdst/x1Y5771vJ8lTO4W4z0SXtIyuJLDyPC3FUQMwyDzYdEi443UrZVaZ8sStIVN2x7HcxoTM7Qtu0xgJU9Jr0S8OeEiFrrwDgjjhTi+DAVs0d9VRmwdyv0sK7ZUk37A8rbtBD6ns3VaKnvgSz/y3/JFvKiYBXJL6RlqOTcw74rFzVowql5ozqwfSC3NLTKf8NOOjd+HF3QGcKbjcfBV64mx6kXDt1N0GkElRhqH91wOM2iAC14jQDcNFg5bSdhH3zvp1jgf7HzSQbzGVOxjrjn7xEn2vlZfbTbHYL2me4ZzWfYEM+F/toYyGDNR1QJ1cP8U3yhWXPSg85TnBoAClM6hlAyZOjoVQLX/GakvqUdEG2ltXDjagZ06/91d98KDGA/mbUikD0YwP0+L2WmH1hEg65YXzVbICA8+Gsib1vTPm1FKZKZU2hT9LnOIdV98rSaDTu3hyDO4CVa2xDg6DlQ7xBRr8Hccc7RhACKZ/Zb6VNwsQ39Q2GaqB+Xs2+oJkwppkXY1szWLtH7j6oUYwhRGJvkkHTZGg74NH71ODIkem4P/mWHkxjVWrNwJJJOBVNx/VZPtHcyQ0Z+OU0ti/+CwhOfN4dyX0tD1b2JtwQ6CAZQlU/psvKAAatArW5eQjR+fL9pf86T0rD4qsgGZNCmkByEbxyHIuO5y19mBf5JCVZBYp+8wYDiOsjPDPUI+Svfr0GeyKTerPVh9qNmlaVvj8uZJ2sjlARCoXTZLUgm89c6ViFKk6Vy8eqpO7zTI20vFwzT+CAyOfxUvo1FPxmg/4Zm+6u3lQCiZnHigUqnCxT/xNJ6bYPwgzgVzMEoZYbbL42lo2zC2037i5JPI79jWgef+ZNXFImuGOQUG9+USDLbQz86PItBRPhxa4jJyryr/3G+AmU/AJcvxLr71nWWCoscRDTlVQIcey2slUkPZBlVIcc6t8ggUvRrYXJMefcv7LLDL/ZVq6QFzm+4kufzPaF8jd8aOyq6mgrlpf7z6FRIUGOmLpl0BOcvJJlEZAVKewJJT2+KHpYGP4tZjhOIEVJTICI7WZsJe/RUw20dFw/NWOcXi5Xn0tQPN6/mJseTpV1zPGJoc8vU+52WMfmWTnq9Xt3Zg/+t7/v1l5K4+fnNbsNeXWww4GYwdAZ56rcK/m7fJvPx4k0ABCPLE30yUbPpE83wrKLLbXWu2mv3xlz7AOs0VdRnLLXfefm5dgktTFnCPhXnz1j3sC5lNEOJOriFaWmYeEg1WkwWQqTTFFgia71SubwMkKkYhpbvk5n6IasiYPV8CjmoBy8ZomawZHiiQ2SlJTE6ftwkdEP3NYpQ6UiPNEzK50M2LD9Nz1l8M7ddkZfjqM6bpI+ppy28HC584mGu6P/kZ0pfl4xrpS/5/0G92E2Gjon8YrnwI9ZvD8PiC80tXBQmdeC8qqSMcTud2Bz2qOZjbzYAtcr/Al9bRs+ERWsmVzp8/u3ID/GSuwjUADLsN/taaRnOVF7UPseyngPnAGz6t8hv/0YFs2tBSFpL04RnkuAJNo307hxNj8WEWGOe/Q74mJody/gZQ7W0uGKPGmS627DZEEvER7YXfJw7gv9813aQu0QZB3n5lKkrhEez0+1pJ67xbIIbG1GrrGe77MzlqR3i8ZM0DvrTcDZyhVGvckaS7tozSoTvAniFNi037wAsq7l1CcuF9IOKbcpCfKPX7X+Gh3sS+4frhipd5eoGYLD2RwB8LN5pg5N0htIyxurmjtA2EeoB/o0xgEE06IEs3455Wl5Y1q4Ah8t639dEzrsKD4xrIQj2d4MlN7aUymPb+FRz9c+J8g2jzSRTtjFhb9ukchWNyWh5CfERcaSEAF7utweti94P0rPHtCMrt5vUnjgj1BXe9woSnErj4xK6iZMECu+SLhs45MIrL2DFzQBTl5rcN73ejIHlUqolqRKiQ/09REWAETsgEDtZzHfNk9VabmT59gdhXo2cxQDvGzLOfgq9ysSwsVStxkG4MEIiRcbzhnRgRQJ8MYQGYn+0bqRrcoHekz0ovxQ7xjhsrNqNYV3/PtHROkpbzCxOcBy659fP9izqZFmTbjxwibFo9chE1Wi0tHSuCd2WqKVDaM/Hd4qdV9ghztzihMq5gqBbyL31dQr2e7gXjBESsBeol/wKJT/BVWxeuca0QOZi4P/DO0yOHsHmQEulcL5+Ck4FlKKtWie7a8u+m/3fd8wcOlEzykyj6No/AXTAb4JeAQK/3Fo3KFaehQkBZTe0iGS26QiOIedVEC7crcrkPC53WU0ZClRwI1m0SERVabcN0S6QSyuJSS3mZJbHF5ieCJavWNWl0DAUCmAjLcm4A0is0gU5VSR1VougagccDcqkwkBL1lOAAAA='
  },
  {
    id: 6,
    title: 'Module thời gian thực RTC DS1307 + AT24C32 kèm pin Cr2032',
    price: 13.999,
    image:
      'data:image/webp;base64,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'
  }
]

const PopoverCart = () => {
  const popover = (
    <Popover className='popover-cart-container'>
      <Popover.Body className='popover-cart-content'>
        <div>Sản Phẩm Mới Thêm</div>
        {fakeCart.slice(0, 4).map((item) => {
          return (
            <>
              <div key={item.id} className='cart-item'>
                <div className='cart-image'>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className='cart-title'>
                  <p>{item.title}</p>
                </div>
                <div className='cart-price'>
                  <sup>đ</sup>
                  {item.price}
                </div>
              </div>
            </>
          )
        })}
        <div className='popover-cart-footer'>
          <div>({fakeCart.length - 4})Thêm Hàng Vào Giỏ</div>
          <div>
            <ButtonShoppe title='Xem giỏ hàng' />
          </div>
        </div>
      </Popover.Body>
    </Popover>
  )

  return (
    <OverlayTrigger trigger='click' placement='bottom' overlay={popover}>
      <div className='popover-cart-icon'>
        <FiShoppingCart style={{ cursor: 'pointer' }} size={26} />
        <div className='quantity'>{fakeCart.length}</div>
      </div>
    </OverlayTrigger>
  )
}

export default PopoverCart
