/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class HttpStatusPageComponent {
    constructor() {
        this.code = 400;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
HttpStatusPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'ecp-http-status-page',
                template: "<div class=\"http-page\">\r\n  <div class=\"img http{{code}}\"></div>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                styles: [":host>>>.http-page{display:block;margin:0 auto;min-width:252px}:host>>>.http-page .img{width:252px;height:92px;display:block;margin-bottom:50px}:host>>>.http400{background:url(data:image/png;base64,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) no-repeat}:host>>>.http510{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAABgCAMAAAADz58qAAABRFBMVEUAAAAeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9YeW9b////////////o7vseW9bT3/f///9Zh+Hm7fthjOLW4fjc5fnf5/nY4vjj6/qmvu96nueUsex3nOcqZNj+/v/Q3fetw/CLq+qDpenl7Pqhu+6ct+6HqOk0a9prk+TI1/Xs8fzg6fra5PiPrutvluX4+v7q7/vM2vaXtOxmkORJe977/P7w9Py7zvOAouj1+P24y/KxxvF9oOhymebE1PW0yPJ0muZOft/S3vfA0fReiuJSgeBDdt08cdzy9v3d5vklYNgmyEmtAAAALnRSTlMAVAKPlYaLcA/wgXwYabq0XzQdCgThrXZkS0U+LSOa2aYnxhO/Vzn30J/qOyUQoPdi1wAADLtJREFUeNrcmtdXGkEUxicIGhXQWDGxJsaSh/kWEQEbgi2AikRFgyW2WJL//z24q15mdmeXfjz5vXhcPcvcmVu+ewf2HzLR3do19g1A+5i/NTDsYm8U10dWV6bc/ZAY/cTeIi5g8mv93haYAfCQSibS0RDnC+mzvdQ9gBlfH3tzdOIOcA+zuhAAcLR8w0XCB9cAfOyN0QOcLAPw1OFUPowCh6fcipNDYPYDUzHYj0pws3rQgiXON37W41TaAGxyFYsA2piCflTGe1Y7H4EFXiR9BXQNsVrwAEshria0BHiYNe1Y4OWzWhfTB5DkBok5oGWEVU0rsMft2QNamSVAqNmm+3AnrAydrurPfJM7samwvRervMmm9wGLnNg5BxBg1dDhYDkFfAcz48X3ZpvegSwXuE0B45+qKmpbvBy2LPd2Ag9NNn0C+GXhk2j1ssoYAZK8PJLAiLkq4qjJprfgp0Ui3gYwWFnIu7HCy2UFbos6c9dc098BMW5BdAVANyufbmCHWxDhFuwAPvNKfjfXdD+WuTWnpL3K6wIOzPIt+6CL+UurcHeZ9i7VVNPbMMdVxJIAWnvL7QIoWZJIKDKNIneLXCKLTtNSrpppei+Q4Cqi2s0SCU97es3Jch347JtwMddI9yRMCeUX0Ctv3s9mmu6x2ekdrchJCvC/Y44MYsVseSf9GTg3ZbpBWQkmm2j6B+AHVxHWdDbnymhn+0wvOhBrdzfknJIGxD5xVEoWl/O21Gj6KNa5Ti5nzszaC9sAOsRlOmbniBwoPiDMBeYhetO4KAU1OFFLh/31tWEoxB/lyq4RaytO7WyXnDLO0WLRGAucwW/3jhN8fmdLLZa7XoVnJh4M5jO8lF1NJ2r8vEwBA+rxnRfYEIPFLNe88rGHgB5Wwmecikp/gDWMQcxzg/3gE/slxsc0g8d4zoj5g2ubdnZQPtF1dFj0CutcYElMdDNijViGmzUKL163+TGu2x4v5Kiw6USKT/PP27Aut7PygREbgNfq82JccmlxSLMm716jaAXVo1whqBM/psL2hOEOhT/6L+kLAFaF7gsQUoaxOiGExA1qxy4v4aJxI8xPYuxl8rqVGWNRYc0glg/qHBtekDjEpGW6PJSlWoCZCchKNYVu5ZCGCkD9Gcc2FzgumlngOn+0F8K551gwal3WUtvNyn36d3itIywk9cbjpXrwLy/lGo26sgjQOsjr8zkjVLUSosfBInndD7ZIfYpReiOplTFmxRjSvJQb9KuHNA+YYA3B9TpLyhxzmV1NIFKMeGM37iwPvQffZSU3qujol2Xv6FEMaUio1p3O17jbp6JGhU0i9vic4/3WymheEepObek8vqqGNDFMs4YwAtxyHd2dqahRYTPzAxiy7IHkrHEE6zZ/GPdcYBse1ZBmjYKhvpCqNFI46VgS75GQJnJB4lTAby5avYomRxJ9CfhVbcAtFf26MkTDpMx+UCd/zLlY2IqRENFKOJPFqaxFnA9sDD/k/1RFQwJdrBF0YU8oajqPYmHj+rOSjHeokFe9cq24xKRyGnam8g95SLOFWVZf5OsW0rFxqbA9R0LmxQmWAZdNBDsneGrJiXsMm4c0lAb6PgRaBvyT/q5xj2+Kgqg+1y2kY4+lHBfOxI1IMDbjBgioomdO3bs4zKDmMKQY0qygbWgWAjOeKVYjHlxwmUzBXNgWnoW9LujPMa7yIfl1WaX6Dsizyyu0KYr+IZ44yu4tJi7PEpvb2SMUGWur6eyHgbTtVIrYecqBBa3ILUhXOjWjv/HOcZhDbq0Y0mwCc1u7Qjt4mzyieVFVuG0mnxFNJMzjQT3vZel21FGjXUPlmFMkWyiZKfq6zTVuJr0CoK2G65YNriCkmYjqIbAIfFHfzi+qcpfMMIlVUwmbxCm3hYx3e1lVTGKZq1jQDHJGh07MYdDmhZcKZe6k9mlaQUMaZ7YAfKxqKmV33fJy0nG9Qye2rSq1cs2rSg95j1Wu6vH6Se44EL1ANb38e0iqwkq867o+TilvjT5KLeaIv+hT94tcJee+IVrBRS2GKp9K2V+3kOlF9l8e0JWwgGrNAFMhm76LdvbMNGK8bJYo95TLFLBmV9ioQ9cp6Dr2FJS3yvjiU8jG9GlEpJuKacWQxoGriue1s1gvr7Bt5HWn101PKdSZ4rgW0O60TQRQ3TdpwpXWuG4g5FzYSMdm9Am8wxUPwOtg+ggeTsX1pBf3ts+TB5cL3ApVuVVnmXulkNvVJHYfjYHcNXys8aYzN/6Vc65fSQVRFDdvgM9USixNzMxHr7sLRRK1FEzJB/nApWSIAabV//+9AOXEDHM3E61WrfZnLnC4c+ecOb/NQVLiPsugpsN0rOFW57NqwqYimR1TYtNV2fGzBAC1HrpYz+bOqoEvVer1kOMb8oVvAUBWr8KKQIcNbilEIovKu5Cu1CatH6ax1lLoQgYeANnqWsat/onaWp1yIGdNA7cicnAR+aGlndLbZGZfT2wi3pXSw+ENRf7aLuD847JONsdvQq9B94H25nHLcaQmeSfpSjVQXHCozZ20fzjkxgMBYkG1hhQhbLhva6HPbbsiwS2qzjW3D6/mPO6GqZoTDY11TxhMqPOa0dhpFrcUyp7sSty5/Elm1RWtmSJPaGFwpiLwgNfw+xizaiKbL+a4JTpXDry81OLGxCYqEtegctqkJ7ce48mNKyiFqIL2mLquer0nuTxLbKJF0haV8zqjZQKXjDSaA6OcS9pBBLdYJLZjKBjF1GZl8EXg0oVrYK1EAmqt3QcOcqx41/WOF0zCnfQ2q65htVmQNva9uHdD2lsct4h4YhOkTBXAssExQHgjKUv4b3yCR3a4Re9K6RKkzHUDc83GE8CiAbUSCdGlWzw3AfPEliTUS6PDPN866h04VJq37IOMjQ57EzBHylwTeK21WUkyIG28Zpua25huxQS8YFu88w5VHjO8g8lvGy+IXIDhFmoCFnGkzHfemLEE7MRXUtFYhR6jv1zYArcQpNwcfrnEKF2x3BHJL4/iCcUttCslIkiZQ0SpsjiTFdONLk6z+Q7/CAc2iY0gZfqVpMrijPkCA1ZekHPtBMBMwHZ7nI6U+ckoptgqbjVlqtgmDU+CdFkZPAGcWSU2gpRbCOkOEKOHF/4xoiS6qQlYxLtSBCkzT7j0TzhiztV99XtTlJkt2NSCU8ALq+KdIGXzgYzXc34kPI54XSC/95BWnaQw6olbNqwTm46U+cNeVPpOaNdfpZYXLyqvkjwEON4l6aahu0Vxy97WFklsBClbZPbPGCb/WVWcVh3ARlz+WkVAqVxP/t1S1Qf5f4uxKyVI2U4jKKhYKEQKeOX3ccpepNJ7GElPQFkzyvWausWj/6Vqg9sjiU2QsuWKX1Fp6w29ZTBrXO+B6hvMLgNO0BD5ko5f2j1nrlyv9jdX2JgmtjNByi2k3HUtb/VhyeieGqitziUA3be1n9YnQE65nvdvt15WtUv2OEHKVgpq3iQ1P/rUBs0apHH7WL7oziIA//26wPshUwGU68nMlbL2JHRzYhOkbK0HarVcAnz1BOFYWRdSivmk4LwaEYPBx4GRYEfb7Z6B/jCAjFwsNz1MZ65Udf3/HYJbjEiZU61ZNTQ4PdeJydEe1VkpGCfVgnM+cQFRmcO5mope3eLeum236njdJV0pQcq2CiHdYOCFc2M8OH7PD32AxxL6pNROuKpW1pc/p17jW+rw3Xq0saPE77XrxustwLu7Ryyx5RlS9nq6XukzH661vK8/qfdqaeiTa600MEFmrrTelbJnYqJo+vwydRlJ6LV0TjJo6BdCPwPuWs1coYktDqFYtuqRVca1CsmgI8BpzLXSCuBvAbcQpGyvIaDZCBbw8wcNKFPaqKKnnlXXOBBZZSe2V1tfjmIEKdtU8p9+bSzNqGKaINr/EXmHZzunD1iOenalvlYy3p4FUmZIM+c2oyxUFuuXWW1UH8Gt0QEACa897soTGash5XCL432ai30DmDRN6ONKADc5Cuzxy6pvsMfNv6zqiCBlK0ti1mVKNjye3b9Z8Y4xbZ7CVLrzVS9dqZiELki5NfUCi9TZa6CYd6VgNWk7C2XF0FWv4BaxvVfkEqRsed/fl8hd6zUVYQEAhQPjlMVi1mvyJ/6QPIr5B8CGx4PqWS62984AKCRP1vRUfhBBdVrGXxt6Zbc+XJ9tlFTfFgA/OReOhFHW4Wk6XlqZX3Bn54uleGIuBQCKraw1PX/6rO23azgEIJlXs/EGmptXemeq6yE0DYaH/9qp0+ruilQmsZqPxtxYdHM1nUlBhllxdUz1OqGHg53TQOfgTMg/GWz7ZzTaPYN6jfnG2/4XBSf9fTNPOjH9ZKzP6TfuT98BnstQdpecO8QAAAAASUVORK5CYII=) no-repeat}:host>>>.http-page .info-txt{text-align:center;margin-bottom:2px;font-size:16px;color:#6e6e6e}:host>>>.http-page .tag-link-module{text-align:center}"]
            }] }
];
/** @nocollapse */
HttpStatusPageComponent.ctorParameters = () => [];
HttpStatusPageComponent.propDecorators = {
    code: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    HttpStatusPageComponent.prototype.code;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1zdGF0dXMtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lY3AtYW50LXVpLyIsInNvdXJjZXMiOlsibGliL2h0dHBQYWdlL2h0dHAtc3RhdHVzLXBhZ2UvaHR0cC1zdGF0dXMtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBT3ZELE1BQU07SUFHSjtvQkFGd0IsR0FBRztLQUcxQjs7OztJQUVELFFBQVE7S0FDUDs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLDhIQUFnRDs7YUFFakQ7Ozs7O21CQUVFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2VjcC1odHRwLXN0YXR1cy1wYWdlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaHR0cC1zdGF0dXMtcGFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaHR0cC1zdGF0dXMtcGFnZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEh0dHBTdGF0dXNQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBjb2RlOiBudW1iZXIgPSA0MDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=