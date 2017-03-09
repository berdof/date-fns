import toDate from '../toDate/index.js'
import differenceInCalendarYears from '../differenceInCalendarYears/index.js'
import compareDesc from '../compareDesc/index.js'

/**
 * @name differenceInYears
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the earlier date
 * @param {Date|String|Number} dateRight - the later date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Number} the number of full years
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * var result = differenceInYears(
 *   new Date(2013, 11, 31),
 *   new Date(2015, 1, 11)
 * )
 * //=> 1
 */
export default function differenceInYears (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  var dateLeft = toDate(dirtyDateLeft, dirtyOptions)
  var dateRight = toDate(dirtyDateRight, dirtyOptions)

  var sign = compareDesc(dateLeft, dateRight, dirtyOptions)
  var difference = Math.abs(differenceInCalendarYears(dateLeft, dateRight, dirtyOptions))

  // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
  // If so, result must be decreased by 1 in absolute value
  dateRight.setFullYear(dateRight.getFullYear() - sign * difference)
  var isLastYearNotFull = compareDesc(dateLeft, dateRight, dirtyOptions) === -sign
  return sign * (difference - isLastYearNotFull)
}