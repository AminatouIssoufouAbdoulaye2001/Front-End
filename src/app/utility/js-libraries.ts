//? JS types

import * as $ from 'jquery';


//? MomentJS
declare const moment: any;

//? SweetAlert2
declare const Swal: any;

//? AOS
declare const AOS: any;

//? Helper functions
/**
 * @returns A reference to `JQueryStatic` element
 * @see https://api.jquery.com/
 */
export const getJquery = () => $;

/**
 * @returns A reference to MomentJS `moment` element
 * @see https://momentjs.com/docs/
 */
export const getMoment = () => moment;

/**
 * @returns An instance of `Swal` class
 * @see https://sweetalert2.github.io/
 */
export const getSweetAlert = () => Swal;

/**
 * @returns An instance of `AOS` interface
 * @see https://michalsnik.github.io/aos/
 */
export const getAos = () => AOS;