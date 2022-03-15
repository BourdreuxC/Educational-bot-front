﻿// -----------------------------------------------------------------------
// <copyright file="IQuestionCosmosService.cs" company="DIIAGE">
// Copyright (c) DIIAGE 2022. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

namespace EducationalTeamsBotApi.Application.Common.Interfaces
{
    using EducationalTeamsBotApi.Domain.Entities;

    /// <summary>
    /// Interface containing methods that call cosmosDB.
    /// </summary>
    public interface IQuestionCosmosService
    {
        /// <summary>
        /// Get all questions.
        /// </summary>
        /// <returns>List of all questions objects</returns>
        Task<IEnumerable<CosmosQuestion>> GetCosmosQuestions();

        /// <summary>
        /// Get a specific question.
        /// </summary>
        /// <param name="id">the identifier of a question.</param>
        /// <returns>The question Object.</returns>
        Task<CosmosQuestion> GetQuestion(string id);

        /// <summary>
        /// Add an answer to the question.
        /// </summary>
        /// <param name="answerId">The id of the answer.</param>
        /// <returns>The updated question.</returns>
        Task<CosmosQuestion> AddAnswerToQuestion(string answerId);

        /// <summary>
        /// Add multiple answers to a question.
        /// </summary>
        /// <param name="answerIds">List of answers ids</param>
        /// <returns>The newly updated question.</returns>
        Task<CosmosQuestion> AddAnswersToQuestion(List<string> answerIds);

        /// <summary>
        /// Add a new tag to a question.
        /// </summary>
        /// <param name="tagId">The id of the tag.</param>
        /// <returns>The updated question.</returns>
        Task<CosmosQuestion> AddTagToQuestion(string tagId);

        /// <summary>
        /// Add multiple new tags to a question.
        /// </summary>
        /// <param name="tagIds">A list of Ids for the tags.</param>
        /// <returns>The updated question.</returns>
        Task<CosmosQuestion> AddTagsToQuestion(List<string> tagIds);
    }
}