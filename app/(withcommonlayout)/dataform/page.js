"use client";
import React, { useState } from "react";

const PortfolioForm = () => {
  const [formData, setFormData] = useState({
    contractData: {
      email: "",
      phone: "",
      address: "",
      github: "",
      facebook: "",
      linkedin: "",
      twitter: "",
      stackOverflow: "",
      devUsername: "",
    },
    educationData: [{ title: "", duration: "", institution: "" }],
    experienceData: [{ title: "", company: "", duration: "" }],
    personalData: {
      name: "",
      profile: "",
      designation: "",
      description: "",
      email: "",
      phone: "",
      address: "",
      github: "",
      facebook: "",
      linkedIn: "",
      twitter: "",
      stackOverflow: "",
      leetcode: "",
      devUsername: "",
      resume: "",
    },
    projectData: [
      {
        name: "",
        description: "",
        tools: [""],
        role: "",
        code: "",
        demo: "",
        image: "",
      },
    ],
    skillData: [""],
  });

  const handleChange = (e, section, index, field) => {
    const value = e.target.value;
    setFormData((prevState) => {
      const updatedSection = Array.isArray(prevState[section])
        ? [...prevState[section]]
        : { ...prevState[section] };

      if (Array.isArray(prevState[section])) {
        updatedSection[index][field] = value;
      } else {
        updatedSection[field] = value;
      }

      return { ...prevState, [section]: updatedSection };
    });
  };

  const handleAddItem = (section) => {
    setFormData((prevState) => ({
      ...prevState,
      [section]: [
        ...prevState[section],
        { title: "", duration: "", institution: "", company: "" },
      ],
    }));
  };

  const handleRemoveItem = (section, index) => {
    setFormData((prevState) => ({
      ...prevState,
      [section]: prevState[section].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md"
    >
      <h2 className="text-2xl font-bold mb-4">Contract Data</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="email" className="block font-medium text-gray-700">
            Email *
          </label>
          <input
            id="email"
            type="email"
            value={formData.contractData.email}
            onChange={(e) => handleChange(e, "contractData", null, "email")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block font-medium text-gray-700">
            Phone *
          </label>
          <input
            id="phone"
            type="text"
            value={formData.contractData.phone}
            onChange={(e) => handleChange(e, "contractData", null, "phone")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="address" className="block font-medium text-gray-700">
            Address *
          </label>
          <input
            id="address"
            type="text"
            value={formData.contractData.address}
            onChange={(e) => handleChange(e, "contractData", null, "address")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="github" className="block font-medium text-gray-700">
            GitHub *
          </label>
          <input
            id="github"
            type="text"
            value={formData.contractData.github}
            onChange={(e) => handleChange(e, "contractData", null, "github")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="facebook" className="block font-medium text-gray-700">
            Facebook *
          </label>
          <input
            id="facebook"
            type="text"
            value={formData.contractData.facebook}
            onChange={(e) => handleChange(e, "contractData", null, "facebook")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="linkedin" className="block font-medium text-gray-700">
            LinkedIn
          </label>
          <input
            id="linkedin"
            type="text"
            value={formData.contractData.linkedin}
            onChange={(e) => handleChange(e, "contractData", null, "linkedin")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="twitter" className="block font-medium text-gray-700">
            Twitter
          </label>
          <input
            id="twitter"
            type="text"
            value={formData.contractData.twitter}
            onChange={(e) => handleChange(e, "contractData", null, "twitter")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="stackOverflow"
            className="block font-medium text-gray-700"
          >
            Stack Overflow
          </label>
          <input
            id="stackOverflow"
            type="text"
            value={formData.contractData.stackOverflow}
            onChange={(e) =>
              handleChange(e, "contractData", null, "stackOverflow")
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="devUsername"
            className="block font-medium text-gray-700"
          >
            Dev Username
          </label>
          <input
            id="devUsername"
            type="text"
            value={formData.contractData.devUsername}
            onChange={(e) =>
              handleChange(e, "contractData", null, "devUsername")
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Education Data</h2>
      {formData.educationData.map((item, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-lg font-medium mb-2">Education {index + 1}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor={`title-${index}`}
                className="block font-medium text-gray-700"
              >
                Title *
              </label>
              <input
                id={`title-${index}`}
                type="text"
                value={item.title}
                onChange={(e) =>
                  handleChange(e, "educationData", index, "title")
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor={`duration-${index}`}
                className="block font-medium text-gray-700"
              >
                Duration *
              </label>
              <input
                id={`duration-${index}`}
                type="text"
                value={item.duration}
                onChange={(e) =>
                  handleChange(e, "educationData", index, "duration")
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor={`institution-${index}`}
                className="block font-medium text-gray-700"
              >
                Institution *
              </label>
              <input
                id={`institution-${index}`}
                type="text"
                value={item.institution}
                onChange={(e) =>
                  handleChange(e, "educationData", index, "institution")
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
                required
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleRemoveItem("educationData", index)}
            className="mt-2 text-sm text-red-500 hover:text-red-700"
          >
            Remove Education
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => handleAddItem("educationData")}
        className="mb-6 text-sm text-indigo-500 hover:text-indigo-700"
      >
        Add Education
      </button>
      <h2 className="text-2xl font-bold mb-4">Experience Data</h2>
      {formData.experienceData.map((item, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-lg font-medium mb-2">Experience {index + 1}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor={`expTitle-${index}`}
                className="block font-medium text-gray-700"
              >
                Title
              </label>
              <input
                id={`expTitle-${index}`}
                type="text"
                value={item.title}
                onChange={(e) =>
                  handleChange(e, "experienceData", index, "title")
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor={`company-${index}`}
                className="block font-medium text-gray-700"
              >
                Company
              </label>
              <input
                id={`company-${index}`}
                type="text"
                value={item.company}
                onChange={(e) =>
                  handleChange(e, "experienceData", index, "company")
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor={`expDuration-${index}`}
                className="block font-medium text-gray-700"
              >
                Duration
              </label>
              <input
                id={`expDuration-${index}`}
                type="text"
                value={item.duration}
                onChange={(e) =>
                  handleChange(e, "experienceData", index, "duration")
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleRemoveItem("experienceData", index)}
            className="mt-2 text-sm text-red-500 hover:text-red-700"
          >
            Remove Experience
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => handleAddItem("experienceData")}
        className="mb-6 text-sm text-indigo-500 hover:text-indigo-700"
      >
        Add Experience
      </button>

      <h2 className="text-2xl font-bold mb-4">Personal Data</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="name" className="block font-medium text-gray-700">
            Name *
          </label>
          <input
            id="name"
            type="text"
            value={formData.personalData.name}
            onChange={(e) => handleChange(e, "personalData", null, "name")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="profile" className="block font-medium text-gray-700">
            Profile *
          </label>
          <input
            id="profile"
            type="text"
            value={formData.personalData.profile}
            onChange={(e) => handleChange(e, "personalData", null, "profile")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="designation"
            className="block font-medium text-gray-700"
          >
            Designation *
          </label>
          <input
            id="designation"
            type="text"
            value={formData.personalData.designation}
            onChange={(e) =>
              handleChange(e, "personalData", null, "designation")
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block font-medium text-gray-700"
          >
            Description *
          </label>
          <textarea
            id="description"
            value={formData.personalData.description}
            onChange={(e) =>
              handleChange(e, "personalData", null, "description")
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="personalEmail"
            className="block font-medium text-gray-700"
          >
            Email *
          </label>
          <input
            id="personalEmail"
            type="email"
            value={formData.personalData.email}
            onChange={(e) => handleChange(e, "personalData", null, "email")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="personalPhone"
            className="block font-medium text-gray-700"
          >
            Phone *
          </label>
          <input
            id="personalPhone"
            type="text"
            value={formData.personalData.phone}
            onChange={(e) => handleChange(e, "personalData", null, "phone")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="personalAddress"
            className="block font-medium text-gray-700"
          >
            Address *
          </label>
          <input
            id="personalAddress"
            type="text"
            value={formData.personalData.address}
            onChange={(e) => handleChange(e, "personalData", null, "address")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="personalGithub"
            className="block font-medium text-gray-700"
          >
            GitHub *
          </label>
          <input
            id="personalGithub"
            type="text"
            value={formData.personalData.github}
            onChange={(e) => handleChange(e, "personalData", null, "github")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="personalFacebook"
            className="block font-medium text-gray-700"
          >
            Facebook
          </label>
          <input
            id="personalFacebook"
            type="text"
            value={formData.personalData.facebook}
            onChange={(e) => handleChange(e, "personalData", null, "facebook")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="personalLinkedIn"
            className="block font-medium text-gray-700"
          >
            LinkedIn
          </label>
          <input
            id="personalLinkedIn"
            type="text"
            value={formData.personalData.linkedIn}
            onChange={(e) => handleChange(e, "personalData", null, "linkedIn")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="personalTwitter"
            className="block font-medium text-gray-700"
          >
            Twitter
          </label>
          <input
            id="personalTwitter"
            type="text"
            value={formData.personalData.twitter}
            onChange={(e) => handleChange(e, "personalData", null, "twitter")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="personalStackOverflow"
            className="block font-medium text-gray-700"
          >
            Stack Overflow
          </label>
          <input
            id="personalStackOverflow"
            type="text"
            value={formData.personalData.stackOverflow}
            onChange={(e) =>
              handleChange(e, "personalData", null, "stackOverflow")
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="personalLeetcode"
            className="block font-medium text-gray-700"
          >
            LeetCode
          </label>
          <input
            id="personalLeetcode"
            type="text"
            value={formData.personalData.leetcode}
            onChange={(e) => handleChange(e, "personalData", null, "leetcode")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="personalDevUsername"
            className="block font-medium text-gray-700"
          >
            Dev Username
          </label>
          <input
            id="personalDevUsername"
            type="text"
            value={formData.personalData.devUsername}
            onChange={(e) =>
              handleChange(e, "personalData", null, "devUsername")
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="resume" className="block font-medium text-gray-700">
            Resume *
          </label>
          <input
            id="resume"
            type="text"
            value={formData.personalData.resume}
            onChange={(e) => handleChange(e, "personalData", null, "resume")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            required
          />
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Project Data</h2>
      {formData.projectData.map((item, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-lg font-medium mb-2">Project {index + 1}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor={`projectName-${index}`}
                className="block font-medium text-gray-700"
              >
                Name *
              </label>
              <input
                id={`projectName-${index}`}
                type="text"
                value={item.name}
                onChange={(e) => handleChange(e, "projectData", index, "name")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor={`projectDescription-${index}`}
                className="block font-medium text-gray-700"
              >
                Description *
              </label>
              <textarea
                id={`projectDescription-${index}`}
                value={item.description}
                onChange={(e) =>
                  handleChange(e, "projectData", index, "description")
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor={`projectTools-${index}`}
                className="block font-medium text-gray-700"
              >
                Tools *
              </label>
              <input
                id={`projectTools-${index}`}
                type="text"
                value={item.tools.join(", ")}
                onChange={(e) => handleChange(e, "projectData", index, "tools")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor={`projectRole-${index}`}
                className="block font-medium text-gray-700"
              >
                Role *Required *
              </label>
              <input
                id={`projectRole-${index}`}
                type="text"
                value={item.role}
                onChange={(e) => handleChange(e, "projectData", index, "role")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor={`projectCode-${index}`}
                className="block font-medium text-gray-700"
              >
                Code *
              </label>
              <input
                id={`projectCode-${index}`}
                type="text"
                value={item.code}
                onChange={(e) => handleChange(e, "projectData", index, "code")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor={`projectDemo-${index}`}
                className="block font-medium text-gray-700"
              >
                Demo
              </label>
              <input
                id={`projectDemo-${index}`}
                type="text"
                value={item.demo}
                onChange={(e) => handleChange(e, "projectData", index, "demo")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor={`projectImage-${index}`}
                className="block font-medium text-gray-700"
              >
                Image
              </label>
              <input
                id={`projectImage-${index}`}
                type="text"
                value={item.image}
                onChange={(e) => handleChange(e, "projectData", index, "image")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleRemoveItem("projectData", index)}
            className="mt-2 text-sm text-red-500 hover:text-red-700"
          >
            Remove Project
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => handleAddItem("projectData")}
        className="mb-6 text-sm text-indigo-500 hover:text-indigo-700"
      >
        Add Project
      </button>

      <h2 className="text-2xl font-bold mb-4">Skill Data</h2>
      {formData.skillData.map((skill, index) => (
        <div key={index} className="mb-4">
          <label
            htmlFor={`skill-${index}`}
            className="block font-medium text-gray-700"
          >
            Skill *
          </label>
          <input
            id={`skill-${index}`}
            type="text"
            value={skill}
            onChange={(e) => handleChange(e, "skillData", index, "")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            required
          />
          <button
            type="button"
            onClick={() => handleRemoveItem("skillData", index)}
            className="mt-2 text-sm text-red-500 hover:text-red-700"
          >
            Remove Skill
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => handleAddItem("skillData")}
        className="mb-6 text-sm text-indigo-500 hover:text-indigo-700"
      >
        Add Skill
      </button>

      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default PortfolioForm;
