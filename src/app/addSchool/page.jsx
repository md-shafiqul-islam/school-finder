"use client";

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddSchoolPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [schoolImage, setSchoolImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleUploadImage = async (e) => {
    const imageFile = e.target.files[0];
    if (!imageFile) return;

    setLoading(true);
    try {
      const imageData = new FormData();
      imageData.append("file", imageFile);
      imageData.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
      );

      const imageUploadUrl = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
      const response = await axios.post(imageUploadUrl, imageData);

      setSchoolImage(response.data.secure_url);
    } catch (error) {
      console.error("Image upload failed", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddSchool = async (data) => {
    const schoolData = { ...data, image: schoolImage };

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/schools`,
        schoolData
      );

      setSubmitted(true);
      reset();
      setSchoolImage("");
    } catch (error) {
      console.error("Error saving school:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-gray-50">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-primary-dark mb-8">
          Add a New School
        </h1>

        <form onSubmit={handleSubmit(handleAddSchool)} className="space-y-6">
          {/* School Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              School Name
            </label>
            <input
              {...register("name", { required: true })}
              placeholder="Enter school name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">Name is required</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Address
            </label>
            <input
              {...register("address", { required: true })}
              placeholder="Enter school address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">Address is required</p>
            )}
          </div>

          {/* City & State */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                City
              </label>
              <input
                {...register("city", { required: true })}
                placeholder="City"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">City is required</p>
              )}
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                State
              </label>
              <input
                {...register("state")}
                placeholder="State"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Contact */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Contact Number
            </label>
            <input
              {...register("contact", { required: true })}
              type="tel"
              placeholder="Enter contact number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.contact && (
              <p className="text-red-500 text-sm mt-1">
                Contact number is required
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Email Address
            </label>
            <input
              {...register("email_id", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              placeholder="Enter email address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.email_id && (
              <p className="text-red-500 text-sm mt-1">
                Please enter a valid email
              </p>
            )}
          </div>

          {/* Upload Image */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              School Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleUploadImage}
              className="w-full text-sm border border-gray-300 rounded-lg px-4 py-2 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-primary file:text-white hover:file:bg-primary-dark"
            />
            {loading && (
              <p className="text-blue-500 text-sm mt-1">Uploading image...</p>
            )}
            {schoolImage && (
              <img
                src={schoolImage}
                alt="Preview"
                className="mt-3 rounded-lg h-32 object-cover border"
              />
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition cursor-pointer"
          >
            Add School
          </button>

          {/* Success Message */}
          {submitted && (
            <p className="text-green-600 text-center font-medium mt-4">
              🎉 School added successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
