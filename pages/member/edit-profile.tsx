import SidebarMember from "../../components/organisms/sidebar-member";
import Image from "next/image";
import FormInput from "../../components/molecules/form-input";

export default function EditProfile() {
  return (
    <section className="edit-profile overflow-auto">
      <SidebarMember active={"setting"} />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="position-relative me-20">
                  <Image
                    src="/img/avatar-1.png"
                    width={90}
                    height={90}
                    className="avatar img-fluid"
                    alt=""
                  />
                  <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                    <Image
                      src="/icon/upload.svg"
                      width={90}
                      height={90}
                      alt=""
                    />
                  </div>
                </div>
                <div className="image-upload">
                  <label htmlFor="avatar">
                    <Image
                      src="/icon/upload.svg"
                      width={90}
                      height={90}
                      alt=""
                    />
                  </label>
                  <input id="avatar" name="avatar" type="file" />
                </div>
              </div>
              <div className="pt-30">
                <FormInput
                  label="Full Name"
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                />
              </div>
              <div className="pt-30">
                <FormInput
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                />
              </div>
              <div className="pt-30">
                <FormInput
                  label="Phone"
                  type="text"
                  placeholder="Enter your phone number"
                  name="phone"
                />
              </div>
              <div className="button-group d-flex flex-column pt-50">
                <button
                  type="submit"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                  role="button"
                >
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}
