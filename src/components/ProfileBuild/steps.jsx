import { motion } from "framer-motion";
import { useState } from "react";
import { Radio, Button, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";

function ProfileBuildStep1() {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState("");
  const onChange = (e) => {
    setAccountType(e.target.value);
  };

  const moveToNext = () => {
    if (accountType == "client") {
      navigate("/profile-build/step-2");
    } else {
      navigate("/profile-build/step-3");
    }
  };
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <>
        <div className="px-3 page-main full-device-height">
          <div>
            <div className="py-3">
              <h2>
                Let's build your profile to your taste. <br /> Step One
              </h2>
            </div>
            <div className="py-3">
              <p className="">Please select the option that applies to you</p>
              <form>
                <div className="text-body-bold">
                  <Radio.Group onChange={onChange} value={accountType}>
                    <Radio value={"seller"} className="radio-item">
                      Service Provider
                    </Radio>
                    <Radio value={"client"} className="radio-item">
                      Looking For Services
                    </Radio>
                  </Radio.Group>
                </div>
              </form>
            </div>
            <div className="offset-top-main-3">
              <Button
                size="large"
                className="color-bg-primary color-fg-primary"
                shape="round"
                onClick={moveToNext}
              >
                Proceed
              </Button>
            </div>
          </div>
        </div>
      </>
    </motion.main>
  );
}
function ProfileBuildStep2() {
    const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main')
  }
  let options = [
    "Plumbing",
    "Hairdressing",
    "Auto Care",
    "Home Cleaning",
    "Dog Walking",
    "Plumbifng",
    "Hairdfressing",
    "Autof Care",
    "Home fCleaning",
    "Dfog Walking",
  ];
  let [clientInterests, setClientInterests] = useState([]);
  const onChange = (checkedValues) => {
    setClientInterests(checkedValues);
    console.log("checked = ", checkedValues);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <>
        <div className="px-3 page-main full-device-height">
          <div>
            <h2>What kind of services would you be most interested in?</h2>
            <p className="py-2">
              Please select one or more options from the list below.
            </p>
            <div className="py-4">
              <Checkbox.Group
                className="check-ref"
                onChange={onChange}
                options={options}
              ></Checkbox.Group>
            </div>
            <div className="offset-top-main-2">
              <Button
                size="large"
                className="color-bg-primary color-fg-primary"
                shape={"round"}
                onClick={goToMain}
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </>
    </motion.main>
  );
}
function ProfileBuildStep3() {
    const navigate = useNavigate();
    const goToMain = () => {
      navigate('/main')
    }
  let options = [
    "Plumbing",
    "Hairdressing",
    "Auto Care",
    "Home Cleaning",
    "Dog Walking",
    "Plumbifng",
    "Hairdfressing",
    "Autof Care",
    "Home fCleaning",
    "Dfog Walking",
  ];
  let [providerServices, setProviderServices] = useState([]);
  const onChange = (checkedValues) => {
    setProviderServices(checkedValues);
    console.log("checked = ", checkedValues);
  };
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <>
        <div className="px-3 page-main full-device-height">
          <div>
            <div>
              <h2>What kinds of services would you like to offer?</h2>
            </div>
            <div className="py-4">
              <Checkbox.Group
                className="check-ref"
                onChange={onChange}
                options={options}
              ></Checkbox.Group>
            </div>
            <div className="offset-top-main-2">
              <Button
                size="large"
                className="color-bg-primary color-fg-primary"
                shape={"round"}
                onClick={goToMain}
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </>
    </motion.main>
  );
}
export { ProfileBuildStep1, ProfileBuildStep2, ProfileBuildStep3 };
