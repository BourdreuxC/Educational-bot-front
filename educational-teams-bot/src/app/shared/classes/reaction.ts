/**
 * Reaction class.
 */
 export class Reaction {
  /**
   * Reaction identifier.
   */
  id: string;

  /**
   * Reaction graph identifier.
   */
  reaction: string;

  /**
   * Reaction value.
   */
  value: number;

  /**
   * Initializes a new instance of the Reaction class.
   * @param id Reaction identifier.
   * @param reaction Reaction graph identifier.
   * @param value Value of the reaction.
   */
  constructor(id: string, reaction: string, value: number) {
    this.id = id;
    this.reaction = reaction;
    this.value = value;
  }
}